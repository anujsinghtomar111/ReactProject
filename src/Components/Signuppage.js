import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Signuppage.css'


const Signuppage = () => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const FormSUb = (e) => {
        e.preventDefault()
        setFName('')
        setLName('')
        setEmail('')
        setPass('')
    }
    return (
        <>

            <form action="" onSubmit={FormSUb}>
                <div className="container">
                <div className="register">
                    <h1>CREATE ACCOUNT</h1>
                </div>
                    <div>
                        <label htmlFor="firstname">FIRSTNAME</label>
                        <input value={fName} onChange={(e) => setFName(e.target.value)} type="text" />
                    </div>
                    <div>
                        <label htmlFor="lastname">LASTNAME</label>
                        <input value={lName} onChange={(e) => setLName(e.target.value)} type="text" />
                    </div>
                    <div> 
                        <label htmlFor="email">EMAIL</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                    </div>
                    <div>  
                        <label htmlFor="password">PASSWORD</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" />
                    </div>
                    <div>
                        <button type="submit" value="Submit">CREATE</button>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Signuppage
