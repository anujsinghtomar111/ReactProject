import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../App'
import HSwiper from './homeSwiper'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Search from './Search'

function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    const { Product, HandleSingleProduct } = useContext(productContext)

    return (
        <>



            <div>
                <div className="swipr">
                    <HSwiper />
                </div>
                <div className="categories">CATEGORIES</div>


                <div className="productsWrapper">
                    {

                        Product.map((x) => {
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

        </>
    )
}

export default Home

