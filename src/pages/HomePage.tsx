import React, { useEffect } from "react"
import Hero from "../components/homepage/Hero"
import HowItWorks from "../components/homepage/HowItWorks"
import WhoAreOlsens from "../components/homepage/WhoAreOlsens"
import GotApples from "../components/allpages/GotApples"


export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <WhoAreOlsens />
      <GotApples />
    </>
  )
}