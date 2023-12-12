
import React from 'react'
import appleimag from '../assets/apple.png'
import emailimg from '../assets/email.svg'
import googleimg from '../assets/google.png'
import { useNavigate } from 'react-router-dom'


function Forgetpassword() {
    let navigate = useNavigate()
  return (
   <>
   <div className='container-fluid' > 
   <div className="login-side" style={{marginTop:"-120px",}} >
               
                <div className="my-form__wrapper" style={{paddingBottom:"20px"}}>
                    <div style={{textAlign:"center"}} className="login-welcome-row">
                        <h1 >  <b>Forget Password </b></h1>
                        <p> Enter your email to recive reset link</p>
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
                         
                         
                        <input type="submit" className="my-form__button" value="Send link"/>
                        <div className="my-form__actions">
                            <div className="my-form__signup" style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                                <a href="#" title="Create Account" onClick={()=>navigate('/signup')} >
                                    Create Account
                                </a>
                    
                             
                                <a href="#" title="Login" onClick={()=>navigate('/login')} >
                                    Login
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

   </div>
   </>
  )
}

export default Forgetpassword