import React, { useEffect } from 'react'
import ServicesTitle from '../components/services/ServicePackagesTitle'
import ServicePackages from '../components/services/ServicePackages'
import PackagesExplained from '../components/services/PackagesExplained';
import PrePressChecklist from '../components/services/PrePressChecklist';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <ServicesTitle />
      <ServicePackages />
      <PackagesExplained />
      <PrePressChecklist />
    </>
  )
}