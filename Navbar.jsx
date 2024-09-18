// Navbar.js
import React from 'react';
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaPhoneAlt , FaPinterestP, FaInstagram  } from 'react-icons/fa';
import { RxTwitterLogo } from "react-icons/rx";
import { RiFacebookCircleLine,RiCustomerService2Fill } from "react-icons/ri";
import { FiYoutube ,FiHelpCircle } from "react-icons/fi";
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FaCodeCompare } from "react-icons/fa6";
import './nav.css';
// import { red } from 'colors';

const Navbar = () => {
  return (
    <div className="top">
      <div className="top-bar">
        <p style={{paddingTop:"9px"}}>Welcome to NEXUSDROP online e-commerce store</p>
        <div className="top-right-icons">
          <p style={{paddingTop:"9px"}}>Follow us</p>
          <div className='icons'>
         <RxTwitterLogo />        
        <RiFacebookCircleLine />
          <FaPinterestP />
          <FiYoutube />
          <FaInstagram />
          </div>
        </div>
      
      </div>
     
      <nav className="navbar">
        <div className="logo">
          <img src="logo_url" alt="Logo" />
          <span>NEXUSDROP</span>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Search for anything..." />
          <button><FaSearch /></button>
        </div>

        <div className="icons " style={{marginRight:"110px"}}>
          {/* <div className="icon"> */}
            <FaShoppingCart style={{height:"30px"}}/>
            {/* <span className="icon-badge">2</span> */}
          {/* </div> */}
          <FaHeart />
          <FaUser />
        </div>
      </nav>

      <div className="action-bar">
        <div className="actions">
          <select>
            <option>All Category</option>
          </select>
        
        </div>
       
        <div className="links">
          <a href="/"><PiMapPinLineDuotone />Track Order</a>
          <a href="/"><FaCodeCompare />Compare</a>
          <a href="/"><RiCustomerService2Fill />Customer Support</a>
          <a href="/"><FiHelpCircle />Need Help</a>
        </div>
        <p style={{marginTop:"8px"}} ><FaPhoneAlt style={{marginLeft:"610px" }} /> +1-202-555-0104</p>
      </div>
    </div>
  );
};

export default Navbar;
