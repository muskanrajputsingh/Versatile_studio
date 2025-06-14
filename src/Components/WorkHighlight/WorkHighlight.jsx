import { useState, useRef, useEffect } from "react"
import "./WorkHighlight.css"
import { client } from '../../sanity/SanityClient';
import { workHighlightQuery} from '../../queries';

export default function WorkHighlight() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [workHighlight,setWorkHighlight]=useState([]);
  const buttonRef = useRef(null)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 991)
    }
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
   }, [])

   //useEffect for sanity
   useEffect(() => {
    client.fetch(workHighlightQuery).then((data) => setWorkHighlight(data));
  }, []);

  const handleMouseMove = (e) => {
    if (!buttonRef.current || isMobile) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const angle = Math.atan2(y - rect.height/2, x - rect.width/2) * (180 / Math.PI)
    
    const glow = buttonRef.current.querySelector('.button-wbs-glow')
    if (glow) {
      if (Math.abs(angle) <= 45) {
        glow.style.transform = 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
      } else if (Math.abs(angle) >= 135) {
        glow.style.transform = 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
      } else if (angle > 45 && angle < 135) {
        glow.style.transform = 'translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
      } else {
        glow.style.transform = 'translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
      }
    }
  }

  return (
    <section className="work-highlights-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Work highlights</h2>
        </div>

        {workHighlight.map((project, index) => (
          <div
            key={project._id}
            className={`case-item-wrap ${index === workHighlight.length - 1 ? "last" : ""}`}
            onMouseEnter={() => setHoveredCard(project._id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`case-item ${index === 1 ? "two" : index === 2 ? "three" : ""}`}>
              <div className="case-info">
                <div className="category-link-wrap">
                  {project.tags.map((tag, idx) => (
                    <p key={idx} className="category-link">
                      {tag}
                    </p>
                  ))}
                </div>

                <h3 className="heading-h4">{project.title}</h3>

                <div className="case-item-button">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button-white-sm"
                    aria-label={`View ${project.title} live site`}
                  >
                    <div className="button-white-text">View live site</div>
                    <div className={`button-white-glow ${hoveredCard === project.id ? "active" : ""}`}></div>
                  </a>
                </div>

                <div className="case-review-item">
                  <img 
                    src={project.projectIcon} 
                    loading="lazy" 
                    width="Auto" 
                    alt="" 
                    className="case-review-icon"
                    aria-hidden="true"
                  />
                  <p className="case-review-content">{project.feedback}</p>
                 
                  {project.clientImageUrl && project.clientName && project.clientTitle && (
                    <div className="case-review-author">
                      <img
                        src={project.clientImageUrl}
                        loading="lazy"
                        alt={project.clientName}
                        className="case-review-author-image"
                        width="40"
                        height="40"
                      />
                      <div>
                        <div className="case-review-author-name">{project.clientName}</div>
                        <p className="case-review-author-info">{project.clientTitle}</p>
                      </div>
                    </div>
                  )}
  
                </div>
              </div>

              <div className="case-image-wrapper">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="case-image-wrap"
                  aria-label={`View ${project.title} project`}
                >
                  <img 
                    src={project.projectImageUrl} 
                    loading="lazy" 
                    alt={project.title}
                    className="case-image"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 720px, (max-width: 1200px) 960px, 1400px"
                  />
                </a>
                <div className="work-image-box"></div>
              </div>
            </div>
          </div>
        ))}

        <div className="button-wrap center">
          <a 
            href="/webflow-projects" 
            className="button-wbs"
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => e.preventDefault()}
          >
            <div className="button-wbs-content">View all webflow projects</div>
            <div className="button-wbs-glow"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
