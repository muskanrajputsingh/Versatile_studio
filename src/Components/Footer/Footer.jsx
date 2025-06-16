import React from 'react';
import { useState,useEffect } from "react"
import './Footer.css';
import { FaLinkedinIn, FaInstagram, FaDribbble, FaTwitter} from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';
import { HiArrowUpRight } from 'react-icons/hi2';
import { client } from '../../sanity/SanityClient';
import { dropdownServiceQuery } from '../../queries';


const Footer = () => {
 const [dropdown, setDropdown] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
        client.fetch(dropdownServiceQuery)
          .then(data => setDropdown(data))
          .catch(err => console.error('Sanity fetch error:', err));
      }, []);
    
      if (!dropdown) return null;

  return (
    <>
      <div className="footer-curve-wrapper">
        <div className="footer-curve-image">
          <img 
            src="https://res.cloudinary.com/dyntugwaq/image/upload/v1749727182/WhatsApp_Image_2025-06-12_at_16.07.59_dpo6yv.jpg"
            alt="Footer curve"
            className="curve-img"
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-gradient"></div>
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <div className="brand-logo">
            <img
                src="/logo3.png"
                alt="Versatile Studio Logo"
                className="w-30 h-30 object-contain"
              />
            </div>
            <p className="footer-description">
              Web development agency specializes in Versatile Studio Development and UI/UX Design.
            </p>
            <a href="https://webflow.com/@webestica-agency" target="_blank" rel="noopener noreferrer" className="cf-badge sm">
              <img 
                src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6746d3c88afc75af46d766b1_webflow-badge-white.svg" 
                alt="Webflow badge white" 
                className="cf-badge-icon sm"
              />
              <div>A Unit Of The RD Group Of Industries</div>
            </a>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                <FaDribbble />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://webflow.com" target="_blank" rel="noopener noreferrer">
                <SiWebflow />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h3 className="footer-heading">{dropdown.title}</h3>
            <nav className="footer-nav">
            {dropdown.items.map((item, index) => (
              <a key={index} href={item.url}>{item.label}</a>
            ))}
            </nav>
          </div>


          {/* Resources Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <nav className="footer-nav">
              <a href="/webflow-cloneables">Webflow Cloneables</a>
              <a href="/figma-cloneables">Figma Cloneables</a>
              <a href="/flowstica-library" className="footer-link">
                Flowstica Library
                <HiArrowUpRight className="external-link-icon" />
              </a>
            </nav>
          </div>

        
          {/* Products Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Products</h3>
            <nav className="footer-nav">
              <a href="https://www.iconstica.com" className="footer-link-with-badge">
                Iconstica
                <span className="badge purple">700+ Free Icons</span>
                <HiArrowUpRight className="external-link-icon" />
              </a>
              <a href="/flowblocks" className="footer-link">
                Flowblocks Library
                <span className="badge dark">F</span>
              </a>
              <a href="https://cta.gallery" className="footer-link">
                CTA.gallery
                <HiArrowUpRight className="external-link-icon" />
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              ©2025 Versatile Studio · All Rights Reserved
            </div>
            
            <div className="footer-made-with">
              <span>Made with ❤️ in </span><img src='/logo3.png' className='w-20 h-40'/>
             
            </div>
            <button onClick={scrollToTop} className="back-to-top">
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
