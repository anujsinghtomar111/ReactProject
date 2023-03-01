import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../App'

function Womens() {
    const { WomensProduct,addtocart } = useContext(productContext) 
  return (
    <>
    <div className="productsWrapper">
        {
            WomensProduct.map((x) => {
                return (
                    <div className="product">
                        <div className="img">
                            <img src={x.img} alt="" />
                        </div>
                        <h3>{x.title}</h3>
                        <p>Mrp-{x.price} ₹</p>
                        <button  onClick={()=>  addtocart(x.id)}>ADD TO CART</button>
                        
                    </div>
                   
                )
            })
        }
    </div>
    </>
  )
}

export default Womens


