import { useState, useRef, useEffect } from "react"
import "./WorkHighlight.css"

export default function WorkHighlight() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
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

  const projects = [
    {
      id: 1,
      categories: ['UI/UX', 'Webflow Dev', 'Jetboost', 'Memberstack'],
      title: 'Iconstica · Icon Library',
      description: 'Iconstica is our latest venture, created for designers and developers, offering an extensive range of premium and free icons. Dive into our library to find minimalist, unique, and consistent icons.',
      author: {
        name: 'Salim Lunat',
        role: 'Founder - Iconstica',
        avatar: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/664b047ed8bcc371c827fd62_avatar-07.avif'
      },
      image: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/664b03c5e4f48db0f42c6496_work-05.avif',
      link: 'https://www.iconstica.com/',
      icon: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66ff83abd2f1fff7c5f468a1_mice.svg',
      hasTestimonial: true
    },
    {
      id: 2,
      categories: ['UI/UX Design', 'Webflow Development', 'Animation'],
      title: 'E54 · Marketing Efficiency Platform',
      description: 'Salim and his team were impressive on our project. Not only their execution was at the level of top agencies (previously worked with IDG baunfire), but they also brought their experience, instinct, and taste to the table to completely go overboard and offer a radical vision.',
      author: {
        name: 'Romain T',
        role: 'Co-founder - e54.io',
        avatar: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/64f5a32eb3bd2af3ca901ea8_avatar-06.avif'
      },
      image: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/64f5af87b3bd2af3ca9e6f0b_work-04.avif',
      link: 'https://www.e54.io/',
      icon: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66ff854d052ef82c86b97fb2_quote.svg',
      hasTestimonial: true
    },
    {
      id: 3,
      categories: ['UI/UX Design', 'Webflow Development', 'Animation'],
      title: 'Puremium · High-Intent Users Generation',
      description: 'PUREMIUM specializes in generating high-intent users for businesses through targeted marketing services. We crafted this website using Figma for design, Webflow for development, and added captivating animations with Lottie.',
      image: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6527b2027be2a14ddfad179a_puremium.avif',
      link: 'https://www.puremium.com/',
      icon: 'https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66ff8652c635ecb1114cfdcf_info.svg',
      hasTestimonial: false
    }
  ]

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

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`case-item-wrap ${index === projects.length - 1 ? "last" : ""}`}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`case-item ${index === 1 ? "two" : index === 2 ? "three" : ""}`}>
              <div className="case-info">
                <div className="category-link-wrap">
                  {project.categories.map((category, idx) => (
                    <p key={idx} className="category-link">
                      {category}
                    </p>
                  ))}
                </div>

                <h3 className="heading-h4">{project.title}</h3>

                <div className="case-item-button">
                  <a 
                    href={project.link} 
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
                    src={project.icon} 
                    loading="lazy" 
                    width="Auto" 
                    alt="" 
                    className="case-review-icon"
                    aria-hidden="true"
                  />
                  <p className="case-review-content">{project.description}</p>
                  {project.author && (
                    <div className="case-review-author">
                      <img
                        src={project.author.avatar}
                        loading="lazy"
                        alt={project.author.name}
                        className="case-review-author-image"
                        width="40"
                        height="40"
                      />
                      <div>
                        <div className="case-review-author-name">{project.author.name}</div>
                        <p className="case-review-author-info">{project.author.role}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="case-image-wrapper">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="case-image-wrap"
                  aria-label={`View ${project.title} project`}
                >
                  <img 
                    src={project.image} 
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
