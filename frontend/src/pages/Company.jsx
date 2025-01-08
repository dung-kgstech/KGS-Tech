import { React, useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import CompanySlider from '../components/CompanySlider';
import Memeber from '../components/Member';
import Vision from '../components/Vision';
import Value from '../components/Value';
import { Helmet } from 'react-helmet';

const Company = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="company">
            <div>
                <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736322816/business-concept_cibvt8.jpg" alt="Banner-company" className="w-full h-[400px] object-cover" />
            </div>
            <Helmet>
                <title>Giới thiệu về Công ty</title>
                <meta name="description" content="Khám phá công ty chúng tôi, các giá trị cốt lõi, tầm nhìn, và các thành viên trong đội ngũ. Cùng nhau xây dựng tương lai." />
                <meta name="keywords" content="Công ty, Giới thiệu công ty, Giá trị cốt lõi, Tầm nhìn, Thành viên, Công ty chúng tôi" />
                <meta property="og:title" content="About Our Company - Giới thiệu về Công ty" />
                <meta property="og:description" content="Khám phá công ty chúng tôi, các giá trị cốt lõi, tầm nhìn, và các thành viên trong đội ngũ." />
            </Helmet>
            <div className="w-full bg-bgcolor">
                <div id="About" className="max-w-7xl mx-auto">
                    <AboutMe />
                </div>

                <div id="Value" className="bg-gray-100 py-7">
                    <Value />
                </div>

                <div id="Vision " className="w-full bg-white">
                    <Vision />
                </div>

                <div id="Member" className="bg-gray-100 py-7">
                    <Memeber />
                </div>

                <div id="CompanySlide" className="p-4 m-8">
                    <CompanySlider />
                </div>
            </div>
        </section>
    );
};

export default Company;
