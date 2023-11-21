import React from 'react'
import appleimag from '../assets/apple.png'
import emailimg from '../assets/email.svg'
import googleimg from '../assets/google.png'
import passwordimg from '../assets/password.svg'
import mainimg from '../assets/main.png'
import logo from '../assets/logomain 1.png'
import { useNavigate } from 'react-router-dom'


function Login() {
let navigate=useNavigate()


  return (
   <>
      <div className="login-wrapper">
            <div className="login-side">
                <a href="#" title="Logo">
                    <img className="logo" src={logo} alt="Logo" style={{width:"250px", height:"80px", marginLeft:"-100px"}}/>
                </a>
                <div className="my-form__wrapper">
                    <div className="login-welcome-row">
                        <h1>Welcome back &#x1F44F;</h1>
                        <p>Please enter your details!</p>
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
                            <label for="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                            <img
                                alt="Email Icon"
                                title="Email Icon"
                                src={emailimg}
                            />
                        </div>
                         
                         

                        <div className="text-field">
                            <label for="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Your Password"
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
                        <input type="submit" className="my-form__button" value="Login"/>
                        <div className="my-form__actions">
                            <div className="my-form__row">
                                <span>Did you forget your password?</span>
                                <a href="#" title="Reset Password">
                                    Reset Password
                                </a>
                            </div>
                            <div className="my-form__signup">
                                <a href="#" title="Create Account" onClick={()=>navigate('/signup')} >
                                    Create Account
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="info-side ">
                <img src={mainimg} alt="Mock" className="mockup" style={{width:'300px'}}/>
                <div className="welcome-message">
                    <h2>Diary Manager! 👋</h2>
                    <p>
                    Write a diary, imagining that you are trying to make an old person jealous.
                    </p>    
                </div>
            </div>
            </div>
    
   </>
  )
}



export default Login