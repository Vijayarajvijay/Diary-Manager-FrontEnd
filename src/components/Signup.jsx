import React from 'react'
import appleimag from '../assets/apple.png'
import emailimg from '../assets/email.svg'
import googleimg from '../assets/google.png'
import passwordimg from '../assets/password.svg'
import mainimg from '../assets/main.png'
import logo from '../assets/logomain 1.png'
import { useNavigate } from 'react-router-dom'
import userimage from '../assets/user1.png'


function Signup() {
let navigate=useNavigate()


  return (
   <>
   
      <div className="login-wrapper">
            <div className="login-side">
                <a href="#" title="Logo">
                    <img className="logo" src={logo} alt="Logo" style={{width:"250px", height:"80px", marginLeft:"-100px"}}/>
                </a>
                <div className="my-form__wrapper">
                    <div className="login-welcome-row ">
                        <h1>Create your account👋</h1>
                    
                    </div>
                    <form className="my-form">
                        <div className="socials-row">
                            <a
                                href="#"
                                title="Use Google"
                            >
                                <img src={googleimg} alt="Google"/>
                                Sign up with Google
                            </a>
                            <a
                                href="#"
                                title="Use Apple"
                            >
                                <img src={appleimag} alt="Apple"/>
                                Sign up with Apple
                            </a>
                        </div>
                        <div className="divider">
                            <div className="divider-line"></div>
                            Or
                            <div className="divider-line"></div>
                        </div>
                        <div className="text-field">
                            <label for="text">User Name:</label>
                            <input
                                type="text"
                                id="text"
                                name="text"
                                placeholder="User Name"
                                required
                            />
                            <img
                                alt="Email Icon"
                                title="Email Icon"
                                src={userimage}
                            />
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
                       
                        <div className="text-field">
                            <label for="password"> Repeat Password:</label>
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

                        <input type="submit" className="my-form__button" value="Sign up"/>
                         <div className="my-form__actions">
                            <div className="my-form__row">
                                <span>Already have account ?</span>
                                <div className="my-form__signup">
                                <a href="#" title="Create Account" onClick={()=>navigate('/login')} style={{marginRight:"165px"}}>
                                    Login
                                </a>
                            </div>
                            </div> 
                            
                        </div>
                    </form>
                </div>
            </div>
            <div className="info-side " style={{marginTop:"264px"}} >
                <img src={mainimg} alt="Mock" className="mockup" style={{width:'300px',}}/>
                <div className="welcome-message">
                    <h2>Diary Manager! 👋</h2>
                    <p>
                    Each new day is a blank page in the diary of your life.
                    </p>    
                </div>
            </div>
            </div>
    
   </>
  )
}



export default Signup