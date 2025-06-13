import { useState,useEffect } from "react"
import "./Services.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  const [hoveredButton, setHoveredButton] = useState(null)
  useEffect(()=>{
    AOS.init({duration:1500})
    })

  return (
    <section className="services-section">
      <div className="services-container" data-aos="fade-up">
        <h2 className="services-title">Our services</h2>

        <div className="services-grid">
          {/* 1) Website Development Card */}
          <div className="service-card development">
            <div className="service-badge">
              <img 
                src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/65cd9e3e48e4112d27911b8c_webflow-icon-white.svg"
                alt="Webflow"
                width="24"
                height="24"
              />
              <span>Webflow</span>
            </div>

            <div className="service-top-right-line"></div>
            <div className="service-top-left-line"></div>

            <div className="service-details">
              <h3 className="service-heading">Website Development</h3>

              <p className="service-description">
                Convert designs to websites, migrate from outdated CMS to Webflow, or kickstart with Website design to
                Webflow website.
              </p>

              <button
                className="service-button"
                onMouseEnter={() => setHoveredButton("development")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Start a project
                <div className={`button-glow ${hoveredButton === "development" ? "active" : ""}`}></div>
              </button>
            </div>

            <div className="service-image-container">
              <img 
                src="https://res.cloudinary.com/dyntugwaq/image/upload/v1749658035/Screenshot_2025-06-11_at_9.30.07_PM_t4y1rh.png"
                alt="Webflow Interface"
                className="interface-image"
              />
            </div>
          </div>

          {/* 2) Website Design Card */}
          <div className="service-card design">

            <div className="service-details">
              <h3 className="service-heading">Website Design</h3>

              <p className="service-description">
                Design stunning websites with engaging narratives, top-notch visuals, exceptional UX/UI, and a focus on
                optimal usability.
              </p>

              <button
                className="service-button"
                onMouseEnter={() => setHoveredButton("design")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Get a quote
                <div className={`button-glow ${hoveredButton === "design" ? "active" : ""}`}></div>
              </button>
            </div>

            <div className="service-image-container">
              <img 
                src="https://res.cloudinary.com/dyntugwaq/image/upload/v1749658093/Screenshot_2025-06-11_at_9.30.35_PM_im0gk0.png"
                alt="Design Interface"
                className="interface-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



