import React, { useEffect } from 'react'
import GotApples from '../components/allpages/GotApples'
import AboutUsTitle from '../components/aboutus/Title'
import WhoAreWe from '../components/aboutus/WhoAreWe'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <AboutUsTitle />
      <WhoAreWe />
      <GotApples />
    </>
  )
}