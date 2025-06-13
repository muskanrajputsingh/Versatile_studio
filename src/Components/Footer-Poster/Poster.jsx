"use client"

import React from 'react';
import './Poster.css';

const Poster = () => {
  return (
    <section className="poster-section">
      <div className="poster-container">
        <div className="poster-content">
          <h1 className="poster-title">Create your website with us</h1><br/>
          <p className="poster-description">
            Your website should be more than just a digital placeholder. With our help, it can
            be a powerful tool for driving business growth. Connect with our team today
            and let's make it happen!
          </p>
          <div className="button-wrap">
            <div className="button-wbs">
              <div className="button-wbs-content">Start a project</div>
              <div className="button-wbs-glow"></div>
            </div>
          </div>
        </div>
        <div className="poster-image">
          <img 
            src="https://res.cloudinary.com/dyntugwaq/image/upload/v1749670178/Screenshot_2025-06-12_at_12.59.06_AM_yuuqmk.png" 
            alt="Webflow interface showcase"
            className="interface-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Poster;
