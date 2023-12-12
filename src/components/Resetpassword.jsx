
import React from 'react'
import appleimag from '../assets/apple.png'
import googleimg from '../assets/google.png'
import passwordimg from '../assets/password.svg'
import { useNavigate } from 'react-router-dom'

function Resetpassword() {
let navigate = useNavigate()
  return (
    <>
    <div className='container-fluid' > 
    <div className="login-side">
               
                <div className="my-form__wrapper" style={{marginTop:"-120px",paddingBottom:"25px"}}>
                    <div className="login-welcome-row" style={{textAlign:"center"}}>
                        <h1> Reset Password </h1>
                        <p>Enter your new password</p>
                    </div>
                    <form className="my-form">
                        <div className="socials-row">
                            <a
                                href="#"
                                title="Use Google"
                            >
                                <img src={googleimg} alt="Google"/>
                                Log in with Google
                            </a>
                            <a
                                href="#"
                                title="Use Apple"
                            >
                                <img src={appleimag} alt="Apple"/>
                                Log in with Apple
                            </a>
                        </div>
                        <div className="divider">
                            <div className="divider-line"></div>
                            Or
                            <div className="divider-line"></div>
                        </div>
                         
                         

                        <div className="text-field">
                            <label for="password">New Password:</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Your New Password"
                                title="Minimum 6 characters at 
                                    least 1 Alphabet and 1 Number"
                                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                                required
                            />
                            <img
                                alt="Password Icon"
                                title="Password Icon"
                                src={passwordimg}
                            />
                        </div>
                        <input type="submit" className="my-form__button" value="Update Password"/>
                        <div className="my-form__signup" >
                              
                                <a href="#" title="Login" onClick={()=>navigate('/login')} >
                                    Login
                                </a>
                            </div>
                    </form>
                </div>
            </div>
    </div>
    </>
  )
}

export default Resetpassword