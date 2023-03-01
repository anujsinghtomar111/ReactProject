import React, { useContext } from 'react'
import { productContext } from '../App'
import './Mens.css'

function Mens() {
  const { MensProduct,addtocart } = useContext(productContext)
  return (
    <>
      <div className="productsWrapper">
        {
          MensProduct.map((x) => {
            return (
              <div className="product">
                <div className="img">
                  <img src={x.img} alt="" />
                </div>
                <h3>{x.title}</h3>
                <p>Mrp-{x.price} ₹</p>
              <button onClick={()=>addtocart(x.id)}>ADD TO CART</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Mens
