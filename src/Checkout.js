import React from 'react'
import "./Checkout.css"

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
        <img 
        className="checkout__ad" 
        src="https://predis.ai/resources/wp-content/uploads/2024/06/mceu_34882845131717072419-66587225ef085.png" alt="" />
        <div>
            <h2 className="checkout__title">
                Your shopping basket
            </h2>
            
        </div>
        </div>
        <div className="checkout__right">
            <h2>The subtotal will go here</h2>
        </div>
    </div>
  )
}

export default Checkout
