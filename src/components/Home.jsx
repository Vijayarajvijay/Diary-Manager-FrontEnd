import React from 'react'
import logo from '../assets/logomain 1.png'
import { useNavigate } from 'react-router-dom'

function Home () {

  let navigate = useNavigate()
  return (


<>
<header>
    <div className="wrapper" id='home'>
        <div className="logo">
            <img className='logo-img' src={logo} alt="" style={{width:"220px",height:"100px"}} />
        </div>
<ul className="nav-area">
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
</ul>
</div>
<div className="welcome-text">
        <h1>
Welocme  to <br/> 
Diary  Manager</h1>
<br/>
<br/>
<button class='glowing-btn' onClick={()=>navigate('/login')} style={{width:"140px"}} ><span class='glowing-txt'style={{fontSize:"16px", letterSpacing:"5px"}} >Login </span> </button>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<button class='glowing-btn' onClick={()=>navigate('/signup')} style={{width:"140px"}} ><span class='glowing-txt'style={{fontSize:"16px", letterSpacing:"5px"}} >Signup </span> </button>
    </div>
    
      
</header>



</>


    
    
  )
}

export default Home