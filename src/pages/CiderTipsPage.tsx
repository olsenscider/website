import React, { useEffect } from "react"
import CiderTipsTitle from "../components/cidertips/CiderTipsTitle"
import Tips from "../components/cidertips/Tips";
import FAQ from "../components/cidertips/FAQs";

export default function CiderTipsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <CiderTipsTitle />
      <Tips />
      <FAQ />
    </>
  )
}