import React, { useEffect } from 'react'
import ContactUsTitle from '../components/contactus/ContactUsTitle';
import InfoAndForm from '../components/contactus/InfoAndForm';

export default function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <ContactUsTitle />
      <InfoAndForm />
    </>
  )
}