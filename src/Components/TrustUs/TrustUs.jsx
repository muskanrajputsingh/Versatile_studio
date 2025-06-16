import React from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import "./TrustUs.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TrustUs = () => {

  useEffect(()=>{
    AOS.init({duration:1800})
    })

  const webflowRive = useRive({
    src: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/673b196b66bd959d10c49af9_webflow-expert.riv',
    autoplay: true,
    stateMachines: undefined,
    artboard: undefined,
    layout: new Layout({
      fit: Fit.Center,
      alignment: Alignment.Center,
      height:'200px',
    }),
    useOffscreenRenderer: false,
    shouldDisableRiveListeners: true
  });

  const templatesRive = useRive({
    src: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/673db2a5558abc77290afbd7_200%2B-template.riv',
    autoplay: true,
    stateMachines: "State Machine 1",
    artboard: "Artboard",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center
    })
  });

  const bootstrapRive = useRive({
    src: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/673db2a5d8b283f24773b49d_bootstrap.riv',
    autoplay: true,
    stateMachines: "State Machine 1",
    artboard: "Artboard",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center
    })
  });

  return (
    <div className="trust-us-section" data-aos="">
      <h1 className="trust-us-title">Here's why you can trust us</h1>
      
      <div className="trust-us-grid">
        {/* Webflow Certified Partner Card */}
        <div className="feature-item-split one">
          <div className="feature-item-split-inner">
            <div className="rive-wrapper">
              <div 
                className="rive" 
                style={{
                  width: '593px',
                  height: '620px',
                  maxWidth: '100%'
                }}
              >
                {webflowRive && <webflowRive.RiveComponent />}
              </div>
            </div>
            <div className="feature-item-split-title-wrap">
              <h2 className="feature-item-split-title">Versatile Studio certified partner</h2>
              <p className="no-margin">We are Versatile Studio experts and part of the exclusive Versatile Studio Template Services program, our certification ensures your project is in trusted hands.</p>
            </div>
          </div>
        </div>

        {/* 200+ Templates Card */}
        <div className="feature-item-split two">
          <div className="feature-item-split-inner">
            <div className="rive-wrapper">
              <div className="rive">
                {templatesRive && <templatesRive.RiveComponent />}
              </div>
            </div>
            <div className="feature-item-split-title-wrap">
              <h2 className="feature-item-split-title">Created templates on Versatile Studio</h2>
              <p className="no-margin">With a portfolio of 260+ templates, we focus on delivering high-quality designs that guarantee seamless functionality and an outstanding user experience.</p>
            </div>
          </div>
        </div>

        {/* Bootstrap Themes Partner Card */}
        <div className="feature-item-split three">
          <div className="feature-item-split-inner">
            <div className="rive-wrapper">
              <div className="rive">
                {bootstrapRive && <bootstrapRive.RiveComponent />}
              </div>
            </div>
            <div className="feature-item-split-title-wrap">
              <h2 className="feature-item-split-title">Bootstrap themes partner</h2>
              <p className="no-margin">As one of 26 global Bootstrap partners, we've sold over 4,800 themes, streamlining Versatile Studio for thousands of developers worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
