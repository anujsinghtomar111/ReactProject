import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import mainlogo from './images/logo.jpg'
import { productContext } from '../App';


const Navbar = () => {
  const { cart,focusFilter,BlurFilter,setSearchFocus,ChangeFilter } = useContext(productContext)

  return (
    <>
      <div className="firstnavbar">
        <ul>
          <li>Contact Us</li>
          <li>Track Order</li>
          <li><i className="fa-solid fa-mobile-screen-button"></i> Download App</li>
        </ul>
      </div>

      <div className="navbar">
        <div className="leftsidenav">
          <ul>
            <NavLink to='/'><img src={mainlogo} alt="" onClick={()=>setSearchFocus(false)} /></NavLink>
            <div className='list'>
              <li><NavLink to='Mens'>MEN</NavLink></li>
              <li><NavLink to='Womens'>WOMEN</NavLink></li>
              <li><NavLink to='Kids'>KIDS</NavLink></li>
            </div>
          </ul>
        </div>
        <div className="rightsidenav">
          <div className="input">
            <Link to='search'><input onBlur={BlurFilter} onChange={ChangeFilter} onFocus={focusFilter} type="search" placeholder='What are you looking for' /></Link>
          </div> 
          <div className="firsti">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <ul>
            <li><NavLink to='Loginpage'><i className="fa-solid fa-user"></i></NavLink></li>
            <li><NavLink to='Cart'><i className="fa-solid fa-bag-shopping" id="cartlogo"></i><span className='cartlength'>{cart.length}</span></NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
