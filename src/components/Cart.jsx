// import React from 'react'
import './cart.css'

const cart = (props) => {
  return (
    <div>
        <div className='cart-wrap'>
            <div className="cart-img" style={{backgroundColor:'blue'}}></div>
            <div className="cart-hold">
                  <h1>{ props.title}</h1>
                  <div>1 &times;${ props.price}</div>
            </div>
        </div>
    </div>
  )
}

export default cart
