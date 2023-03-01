import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Loginpage.css'
import Logo from './images/img_avatar2.png';

const Loginpage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Login = (e) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <form action="" onSubmit={Login}>
                <div className="imgcontainer">
                    <img src={Logo} alt="Avatar" className="avatar"/>
                </div>
                <div className="loginpage">
                    <h1>LOGIN</h1>
                </div>
                <div className="container">

                    <div>
                        <label htmlFor="email">EMAIL</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember Me
                    </label>
                    <div>
                        <button>SIGN IN</button>
                    </div>
                        
                    <NavLink to='Signuppage'><h3 className='createaccountlabel'>CreateAccount</h3></NavLink>
                </div>
            </form>



        </>
    )
}

export default Loginpage
