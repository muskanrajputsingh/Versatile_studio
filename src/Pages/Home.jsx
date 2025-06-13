import React from 'react'
import WorkHighlight from '../Components/WorkHighlight/WorkHighlight'
import Services from '../Components/Services/Services'
import TrustUs from '../Components/TrustUs/TrustUs'
import Review from '../Components/Review/Review'
import Poster from '../Components/Footer-Poster/Poster'
import MainHero from '../Components/MainHero.jsx/MainHero'

const Home = () => {
  return (
    <>
      <MainHero />
      <WorkHighlight/>
      <Services/>
      <TrustUs/>
      <Review/>
      <Poster/>
    </>
  )
}

export default Home
