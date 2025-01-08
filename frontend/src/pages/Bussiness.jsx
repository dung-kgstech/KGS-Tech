
import Services from '../components/Services';
import CustomerReview from '../components/CustomerReview';
import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
const Bussiness = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (

    <section id="Bussiness">
      <div>
        <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061376/BanerServies_mewami.jpg" alt="Baner-Servies" className="w-full h-[400px] object-cover" />
      </div>

      <div className="text-center">
        <Services />
      </div>

      <div className="mx-auto text-center py-8">
        <CustomerReview />
      </div>

      <div className="px-4 mx-auto py-8"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736328361/background_contact_sngg2g.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <ContactForm />
      </div>
    </section>
  );
};

export default Bussiness;
