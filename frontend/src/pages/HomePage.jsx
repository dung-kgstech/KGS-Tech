import React, { useState } from 'react';
import banner from '../assets/images/banner.jpg';
import BlogSlider from '../components/BlogSlider';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';

const HomePage = () => {
    return(
    <div className="bg-white ">
        <section id="home" className="pb-5">
            <div>
                <img src={banner} alt="Banner"  className="w-full h-[400px] object-cover" />
            </div>
            <AboutMe />
            <Services/>
        </section>
    <BlogSlider />
    </div>
    );
};

export default HomePage;
