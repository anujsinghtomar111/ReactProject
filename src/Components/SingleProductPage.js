import React, { useContext, useState } from 'react'
import { productContext } from '../App'
import './SingleProductPage.css'


const SingleProductPage = (id) => {
    const { singleProduct, Increaseqty, Decreaseqty, addtocart } = useContext(productContext)

    const [bordercolor, setBodercolor] = useState('M');






    return (
        <>
            <div className="singleproductWrapper">


                <div className="sProduct">

                    <div className="col1">
                        <div className="col1img">
                            <img src={singleProduct.img} alt="" />
                        </div>
                    </div>
                    <div className="col2">
                        <h3>{singleProduct.title}</h3>
                        <hr />
                        <p>Mrp-{singleProduct.price} ₹</p>
                        <div className="sizeselector">
                            <label>Please select a size</label>
                            <ul>
                                <li style={{ border: bordercolor == 'XXS' ? '2px solid red' : '2px  solid black' }} onClick={() => setBodercolor('XXS')} >XXS</li>
                                <li style={{ border: bordercolor == 'XS' ? '2px solid red' : '2px  solid black' }} onClick={() => setBodercolor('XS')}>XS</li>
                                <li style={{ border: bordercolor == 'S' ? '2px solid red' : '2px  solid black' }} onClick={() => setBodercolor('S')}>S</li>
                                <li style={{ border: bordercolor == 'M' ? '2px solid red' : '2px  solid black' }} onClick={() => setBodercolor('M')}>M</li>
                                <li style={{ border: bordercolor == 'L' ? '2px solid red' : '2px  solid black' }} onClick={() => setBodercolor('L')}>L</li>
                                <li style={{ border: bordercolor == 'XL' ? '2px solid red' : '2px  solid black' }} onClick={() => setBodercolor('XL')}>XL</li>
                                <li style={{ border: bordercolor == 'XXL' ? '2px solid red' : '2px  solid black' }} onClick={() => setBodercolor('XXL')}>XXL</li>
                                <li style={{ border: bordercolor == 'XXXL' ? '2px solid red' : '2px  solid black' }} onClick={() => setBodercolor('XXXL')}>XXXL</li>
                            </ul>
                        </div>
                        <div className='colorselecter'>
                            <label>Choose a color: </label>
                            <select className='colors'>
                                <option>Black</option>
                                <option>Blue</option>
                                <option>White</option>
                            </select>
                        </div>
                        <div className='quantityselecter'>
                            <label for="quantity">Quantity: </label>

                            <button onClick={() => Decreaseqty(singleProduct.id)}>-</button>
                            <button className='showtotalqty'>{singleProduct.qty}</button>
                            <button onClick={() => Increaseqty(singleProduct.id)}>+</button>

                        </div>
                        <div className="addtocart"><button onClick={() => addtocart(singleProduct.id)}>ADD TO CART</button></div>
                    </div>

                </div>



            </div>
        </>
    )
}

export default SingleProductPage
