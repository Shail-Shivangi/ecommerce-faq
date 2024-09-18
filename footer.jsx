// Footer.js
import React from 'react';
import { FaInstagram} from 'react-icons/fa';
import { RxTwitterLogo } from "react-icons/rx";
import { RiFacebookCircleLine,RiCustomerService2Fill } from "react-icons/ri";
import { FiYoutube ,FiHelpCircle } from "react-icons/fi";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="/about">Company Info</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/help">Help & FAQs</a></li>
            <li><a href="/shipping">Shipping & Delivery</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-media">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><RiFacebookCircleLine /> Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <RxTwitterLogo /> Twitter</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"> <FiYoutube /> YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
