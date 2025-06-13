import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaInstagram, FaDribbble, FaTwitter } from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';
import { HiArrowUpRight } from 'react-icons/hi2';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
              <div className="logo-circle">V</div>
              <span className="brand-name">Versatile Studio</span>
            </div>
            <p className="footer-description">
              Web development agency specializes in Webflow Development and UI/UX Design.
            </p>
            <a href="https://webflow.com/@webestica-agency" target="_blank" rel="noopener noreferrer" className="cf-badge sm">
              <img 
                src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6746d3c88afc75af46d766b1_webflow-badge-white.svg" 
                alt="Webflow badge white" 
                className="cf-badge-icon sm"
              />
              <div>Certified Webflow Partner</div>
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
            <h3 className="footer-heading">Services</h3>
            <nav className="footer-nav">
              <a href="/webflow-development">Webflow Development</a>
              <a href="/ui-ux-design">UI/UX Design</a>
              <a href="/webflow-template-customization">Webflow Template Customization</a>
            </nav>
          </div>

          {/* Explore Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Explore</h3>
            <nav className="footer-nav">
              <a href="/webflow-templates">Webflow Templates</a>
              <a href="/framer-templates">Framer Templates</a>
              <a href="/bootstrap-themes">Bootstrap Themes</a>
              <a href="/premium-figma-templates">Premium Figma Templates</a>
              <a href="/reviews">Reviews</a>
            </nav>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <nav className="footer-nav">
              <a href="/webflow-cloneables">Webflow Cloneables</a>
              <a href="/figma-cloneables">Figma Cloneables</a>
              <a href="/blog">Blog</a>
              <a href="/flowstica-library" className="footer-link">
                Flowstica Library
                <HiArrowUpRight className="external-link-icon" />
              </a>
            </nav>
          </div>

          {/* Help Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Help</h3>
            <nav className="footer-nav">
              <a href="/contact">Contact Us</a>
              <a href="/webflow-templates-support">Webflow Templates Support</a>
              <a href="/bootstrap-themes-support" className="footer-link">
                Bootstrap Themes Support
                <HiArrowUpRight className="external-link-icon" />
              </a>
              <a href="/request-template">Request Template</a>
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
              <span>Made with ❤️ in</span>
              <SiWebflow className="webflow-icon" />
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
