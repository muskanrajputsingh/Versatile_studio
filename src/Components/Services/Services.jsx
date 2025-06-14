import { useState,useEffect } from "react"
import "./Services.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { client } from '../../sanity/SanityClient';
import { servicesQuery } from '../../queries';

export default function Services() {
  const [hoveredButton, setHoveredButton] = useState(null)
  const [services, setServices] = useState([]);

  useEffect(()=>{
    AOS.init({duration:1500})
    })

    useEffect(() => {
      client.fetch(servicesQuery).then((data) => setServices(data));
    }, []);
  

  return (
    <section className="services-section">
      <div className="services-container" data-aos="fade-up">
        <h2 className="services-title">Our services</h2>

        <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card development" key={service._id || index}>
            
            {service.badgeIconUrl && (
               <div className="service-badge">
              <img 
                src={service.badgeIconUrl}
                alt="Badge Icon"
                width="24"
                height="24"
              />
               <span>{service.badgeText}</span>
               </div>
            )}

            <div className="service-top-right-line"></div>
            <div className="service-top-left-line"></div>

            <div className="service-details">
              <h3 className="service-heading">{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <button
                className="service-button"
                onMouseEnter={() => setHoveredButton("development")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {service.button}
                <div className={`button-glow ${hoveredButton === "development" ? "active" : ""}`}></div>
              </button>
            </div>

            <div className="service-image-container">
              <img 
                src={service.imageUrl}
                alt="Webflow Interface"
                className="interface-image"
              />
            </div>
          </div>
          ))}

        </div>
      </div>
    </section>
  )
}



