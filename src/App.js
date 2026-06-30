import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from "./Checkout"
import Login from "./Login"
import Payment from "./Payment"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders"

const promise = loadStripe("pk_test_51TnTW5FoOtHgM8peublsub8GFQSrKCKZvMIaorc4jF0eV1f8uGWBTdlzvWur8GoxZrxWBIIJcmuVGe7GX5twKQWB00RBZPivH4");

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("The User is >>> ', authUser")

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])


  return (
    // BEM
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders"element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element = {
          <Elements stripe={promise}>
            <Payment />
          </Elements>} />
      </Routes>
      <Footer />
    </div>
  </Router> 
  );
}

export default App;
