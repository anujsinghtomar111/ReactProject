import React, { useContext, useState } from 'react'
import { productContext } from '../App'
import './Cart.css'
function Cart() {
    const { cart, setCart, RemoveCart, total, setTotal,Increaseqty,Decreaseqty } = useContext(productContext)
    function removeCart(id) {
        let obj = cart.find((x) => x.id === id)
        setCart(cart.filter((x) => x.id != id))
        setTotal(total - obj.price)

    }


   


    return (
        <>
            <div className="cart">

                <div className="cartCardWrapper">
                    {
                        cart.length == 0 ? <h1>cart is empty!</h1> :
                            cart.map((item) => {
                                return (<>

                                    <div className="cartProduct">
                                        <div className="img"><img src={item.img} alt="" /></div>
                                        <h3 className='title'>{item.title}</h3>
                                       
                                        <div className="totalbutton">
                                            <button onClick={() => Decreaseqty(item.id)}>-</button>
                                            <button className='showtotalqty'>{item.qty}</button>
                                            <button onClick={() => Increaseqty(item.id)}>+</button>
                                        </div>
                                        <div className='lastCol'>
                                        <p className='price'>₹ {item.price}</p>
                                        <div className="removeButton">
                                            <button onClick={() => removeCart(item.id)}>Remove</button>
                                        </div>
                                        </div>
                                    </div>


                                </>

                                )

                            })
                    }

                </div>
                <div className="billingDetails">
                    <h3>Billing Details</h3>
                    <div className="spantext">
                        <p><span>Cart Total</span><span>{total}</span></p>
                        <p><span>Shipping Charges</span><span>0</span></p>
                        <p><span>Total Amount</span><span>{total}</span></p>
                    </div>
                    <div className="orderbutton">
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
