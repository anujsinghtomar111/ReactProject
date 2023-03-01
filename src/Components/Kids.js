import React, { useContext } from 'react'
import { productContext } from '../App'

function Kids() {
    const {KidsProduct,addtocart, SingleProductPage} = useContext(productContext)
  return (
    <>
    <div className="productsWrapper">
        {
            KidsProduct.map((x) => {
                return(
                    <div className="product" onClick={()=> SingleProductPage()}>
                        <div className="img">
                            <img src={x.img} alt="" />
                        </div>
                        <h3>{x.title}</h3>
                        <p>Mrp-{x.price} ₹</p>
                        <button onClick={()=>  addtocart(x.id)}>ADD TO CART</button>   
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Kids
