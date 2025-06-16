import { useState ,useEffect} from 'react'
import './Navbar.css'
import { client } from '../../sanity/SanityClient';
import {dropdownServiceQuery} from '../../queries';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [dropdown, setDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
      client.fetch(dropdownServiceQuery)
        .then(data => setDropdown(data))
        .catch(err => console.error('Sanity fetch error:', err));
    }, []);
  
    if (!dropdown) return null;

    return (
      <nav className="relative top-0 left-0 right-0 z-50 px-6 lg:px-16 py-4 pointer-events-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Navigation Links */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/logo3.png"
                alt="Versatile Studio Logo"
                className="w-25 h-25 object-contain"
              />
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="/" className="text-white hover:text-purple-300 transition-colors font-medium">
                Home
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="text-white hover:text-purple-300 transition-colors font-medium flex items-center gap-1"
                >
                 {dropdown.title}
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                {/* Services Dropdown */}
                <div className="dropdown-menu">
                {dropdown.items.map((item, index) => (
                  <a key={index} href={item.url} className="dropdown-item">{item.label}</a>
                ))}
                </div>
              </div>
              <div className="relative group">
                <a
                  href="#"
                  className="text-white hover:text-purple-300 transition-colors font-medium flex items-center gap-1"
                >
                  Resources
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                {/* Resources Dropdown */}
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">Blog</a>
                  <a href="#" className="dropdown-item">Case Studies</a>
                  <a href="#" className="dropdown-item">Documentation</a>
                  <a href="#" className="dropdown-item">Tutorials</a>
                </div>
              </div>
              <a href="#" className="text-white hover:text-purple-300 transition-colors font-medium">
                Versatile Studio Templates
              </a>
            </div>
          </div>
  
          {/* Desktop Contact Us Button */}
          <div className="hidden lg:block">
            <Link to="/contact"><button className="contact-button">
              Contact Us
            </button></Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mobile-menu`}>
          <div className="flex flex-col gap-4 mt-4">
            <a href="#" className="mobile-menu-item">
              Home
            </a>
            <div className="mobile-dropdown">
              <button className="mobile-menu-item w-full text-left flex justify-between items-center">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#" className="mobile-submenu-item">Web Development</a>
                <a href="#" className="mobile-submenu-item">UI/UX Design</a>
                <a href="#" className="mobile-submenu-item">Mobile Apps</a>
                <a href="#" className="mobile-submenu-item">Consulting</a>
              </div>
            </div>
            <div className="mobile-dropdown">
              <button className="mobile-menu-item w-full text-left flex justify-between items-center">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#" className="mobile-submenu-item">Blog</a>
                <a href="#" className="mobile-submenu-item">Case Studies</a>
                <a href="#" className="mobile-submenu-item">Documentation</a>
                <a href="#" className="mobile-submenu-item">Tutorials</a>
              </div>
            </div>
            <a href="#" className="mobile-menu-item">
              Webflow Templates
            </a>
            <button className="contact-button-mobile">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    )
  }
  