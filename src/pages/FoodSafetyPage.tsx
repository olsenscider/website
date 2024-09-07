import React, { useEffect } from "react"
import FoodSafetyTitle from "../components/foodsafety/FoodSafetyTitle";
import FoodSafetyContent from "../components/foodsafety/Content";

export default function FoodSafetyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <FoodSafetyTitle />
      <FoodSafetyContent />
    </>
  )
}