import { React, useEffect } from 'react';
import BlogSlider from '../components/BlogSlider';
import { Link } from 'react-router-dom';
import Introduce from '../components/Introduce';
import FlipCard from '../components/FlipCard';
import Helmet from 'react-helmet';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="home" >
            <div className="bg-bgcolor">
                <Helmet>
                    <title>Công ty KGS-Tech</title>
                    <meta name="description" content="Khám phá KGS-Tech, công ty cung cấp các giải pháp công nghệ hàng đầu như phát triển ứng dụng Web, ứng dụng di động và thiết kế website. Cùng đội ngũ chuyên gia, chúng tôi cam kết mang lại giải pháp tối ưu cho doanh nghiệp." />
                    <meta name="keywords" content="KGS-Tech, giải pháp công nghệ, phát triển ứng dụng, ứng dụng web, ứng dụng di động, thiết kế website, doanh nghiệp, công ty công nghệ" />
                    <meta property="og:title" content="Giới thiệu về Công ty KGS-Tech" />
                    <meta property="og:description" content="Khám phá KGS-Tech, công ty cung cấp các giải pháp công nghệ hàng đầu như phát triển ứng dụng Web, ứng dụng di động và thiết kế website." />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Giới thiệu về Công ty KGS-Tech" />
                    <meta name="twitter:description" content="Khám phá KGS-Tech, công ty cung cấp các giải pháp công nghệ hàng đầu như phát triển ứng dụng Web, ứng dụng di động và thiết kế website." />
                </Helmet>
                <div className="relative">
                    <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061375/banner_qdeuaj.jpg" alt="Banner" className="w-full h-[700px] sm:h-[500px] md:h-[700px] object-cover" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center">
                        <div className="grid w-full max-w-screen-xl mx-auto px-4 sm:px-8">
                            <div className="p-3 flex justify-start items-center text-left sm:text-center px-4 sm:px-8">
                                <div className="w-full lg:w-[800px] sm:p-8 rounded-lg">
                                    <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white text-center sm:text-left">
                                        Chào mừng đến với KGS-Tech
                                    </h2>
                                    <p className="text-base sm:text-lg mb-6 text-white text-center sm:text-left">
                                        Chúng tôi cung cấp các giải pháp công nghệ hàng đầu, bao gồm phát triển ứng dụng Web, ứng dụng di động, và thiết kế website.
                                    </p>
                                    <p className="text-base sm:text-lg mb-6 text-white text-center sm:text-left">
                                        Cùng với đội ngũ chuyên gia, chúng tôi cam kết mang đến giải pháp tối ưu và hiệu quả cho doanh nghiệp của bạn.
                                    </p>
                                    <Link to="/company" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-6 rounded-full text-lg sm:text-xl transition duration-300 block w-max mx-auto sm:mx-0">
                                        Tìm hiểu thêm
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Introduce />
                <FlipCard />
                <BlogSlider />
            </div>
        </section>
    );
};

export default HomePage;
