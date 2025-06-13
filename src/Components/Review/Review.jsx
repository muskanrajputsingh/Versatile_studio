import React from 'react';
import "./Review.css"

const Review = () => {
  const reviews = [
    {
      text: "Salim and his team were impressive on our project. Not only their execution was at the level of top agencies (previously worked with IDG, newmedia, baunfire), but they also brought their experience, instinct, and taste to the table to completely go overboard and offer a radical vision.\n\nAs a CTO for 20 years, I rarely had a good experience with top agencies around the globe, Salim and his team won me over with their open clear communication, technical insights, and delivery consistency along this months-long project. We are blessed to have met this team and will do everything we can to retain them in our orbit for future projects and collaborations. In summary, try Salim for your project you won't regret it...",
      author: "Romain T",
      title: "Co-founder - e54.io",
      image: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/64f5a32eb3bd2af3ca901ea8_avatar-06.avif"
    },
    {
      text: "I had the pleasure of working with the Webestica team to create my website, and I couldn't be more satisfied. From the start, their responsiveness was outstanding—every question or need was met with a quick and precise reply. What truly sets Webestica apart is their ability to listen and understand exactly what I was looking for.\n\nI've worked with several agencies in the past, but none have reached the level of excellence that Webestica offers. Their team is incredibly professional, always available, and the final product is simply exceptional. If you're looking for a company that can deliver a high-quality website in an impressive time frame, with unparalleled customer service, look no further. In my opinion, Webestica is the best on the market.",
      author: "Valentino Soubra",
      title: "CEO, Tip & Tap",
      image: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66d0002c60efae0cc7442b66_avatar-08.avif"
    },
    {
      text: "Salim was a pleasure to work with. He communicated exceptionally well, delivered the site in half the time (despite requesting it over the weekend), and was willing to accommodate all changes and feedback. 10/10 experience.I had the pleasure of working with the Webestica team to create my website,I had the pleasure of working with the Webestica team to create my website. ",
      author: "Keagan Stokoe",
      title: "Head of Data at Isizwe",
      image: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/634a90626f6b020bb892ccac_avatar-03.webp"
    },
    {
      text: "I hired Mariya K. to help with revamping our new company's website. The site is looking fantastic and I am very pleased with the results. Looking forward to working with them on new projects. Highly recommend!",
      author: "Yiannis K",
      title: "I.T Analyst and Project Manager",
      image: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6476da647531cb1331959ecb_mika-matikainen.avif"
    },
    {
      text: "We were super happy to work with Webestica. They were fast, responsive and helpful and in general the collaboration was very smooth. We would definitely recommend them to anyone looking for a reliable partner.",
      author: "Romain T",
      title: "Co-founder - e54.io",
      image: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6476e2d653dc2bc843768c13_alexis-perron.avif"
    },
    {
      text: "I've worked with Webestica on my brand's website - they were very efficient, available, and professional. The final result was exactly what I was looking for. I highly recommend working with them.",
      author: "Valentino S",
      title: "CEO, Tip & Tap",
      image: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6406bf7febc9b89f8b37eed0_avatar-04.webp"
    }
  ];

  return (
    <section className="review-section">
      <h1 className="review-title">Why clients love us</h1>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-content">
              <p className="review-text">{review.text}</p>
            </div>
            <div className="review-author">
              <div className="author-image">
                <img src={review.image} alt={review.author} />
              </div>
              <div className="author-info">
                <h3 className="author-name">{review.author}</h3>
                <p className="author-title">{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
