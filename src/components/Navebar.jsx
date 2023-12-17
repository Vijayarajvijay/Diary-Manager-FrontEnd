import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    let navigate = useNavigate()
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar" style={{position:'fixed',zIndex:'1',width:'100%'}}>
      <span className="logo-font">
             <span className="monkkee-monk">Diary</span><span className="monkkee-kee">Manager</span>
           </span>
      <div id='menu3' className={`menu ${menuActive ? 'active' : ''}`}>
        <div className="menu-links">
          <a href="#" onClick={()=>navigate('/dashboard')}>Home</a>
          <a href="#" onClick={()=>navigate('/creatediary')}>Create Diary</a>
          <a href="#" onClick={()=>navigate('/mydiarys')}>My Diarys</a>
          <a href="#" onClick={()=>navigate('/profile')}>Profile</a>
        </div>
        <button className="log-in">Log out</button>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
