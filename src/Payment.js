import React, { useState, useEffect } from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from "react-router-dom"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';
import axios from './axios';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

function Payment() {
    const [{ basket = [], user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        // IMPORTANT SNIPPET: generate the special stripe secret which allows us to charge a customer

    if (!basket || basket.length === 0) return;

        const getClientSecret = async () => {
        const response = await axios({
            method: "post",
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("THE SECRET IS >>>", clientSecret)

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        if (!user?.uid) {
            setError("You must be logged in to place an order.");
            setProcessing(false);
            return;
        }

        const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
            card: elements.getElement(CardElement),
            },
        });

        if (!paymentIntent) {
            setError("Payment failed. No payment intent returned.");
            setProcessing(false);
            return;
        }

        //paymentIntent = paymentConfirmation from Stripe

        console.log(paymentIntent);
        
        if (!Array.isArray(basket)) {
            setError("Basket is missing/empty.");
            setProcessing(false);
            return;
            }

        console.log("basket is", basket);
        console.log("amount is", paymentIntent.amount);
        console.log("created is", paymentIntent.created);
        
        const sanitizeBasket = (items) =>
            (Array.isArray(items) ? items : []).map((item) => {
            const clean = { ...item };
            // remove any undefined values (Firestore disallows them)
            Object.keys(clean).forEach((k) => clean[k] === undefined && delete clean[k]);
            return clean;
        });

        const safeBasket = sanitizeBasket(basket);

            await setDoc(
            doc(collection(doc(db, "users", user.uid), "orders"), paymentIntent.id),
                { basket: safeBasket, amount: paymentIntent.amount, created: paymentIntent.created }
            );

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET"
            })

            navigate('/orders');
        };

    const handleChange = e => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <div className="payment">
            <div className="payment__container">
        <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Los Angeles, CA</p>
            </div>
        </div>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
            
        </div>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                {/* Stripe Magic Will Happen */}

                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange} />

                    <div className="payment__priceContainer">
                        <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                    </div>
                    
                    {/* Errors */}
                    {error && <div>{error}</div>}

                </form>
            </div>       
        </div>
      </div>
    </div>
  )
}

export default Payment
