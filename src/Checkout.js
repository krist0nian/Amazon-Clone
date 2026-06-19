import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
        <img 
        className="checkout__ad" 
        src="https://predis.ai/resources/wp-content/uploads/2024/06/mceu_34882845131717072419-66587225ef085.png" alt="" />
        <div>
            <h2 className="checkout__title">
                Your shopping basket</h2>
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
