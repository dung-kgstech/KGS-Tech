
import Services from '../components/Services';
import CustomerReview from '../components/CustomerReview';
import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
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

      <div className="mx-auto bg-gray-100 text-center py-8">
        <CustomerReview />
      </div>

    
    </section>
  );
};

export default Bussiness;
