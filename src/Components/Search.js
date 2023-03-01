import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../App'

const Search = () => {
    const { filter, HandleSingleProduct } = useContext(productContext)
    return (
        <div>
            <div className="productsWrapper">
                {

                    filter.map((x) => {
                        return (
                            <>
                                <Link to='singleproduct'>
                                    <div className="product" data-aos="fade-up" onClick={() => HandleSingleProduct(x.id)}>
                                        <div className="img">
                                            <img src={x.img} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search
