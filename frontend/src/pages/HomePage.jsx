import React from 'react';
import BlogSlider from '../components/BlogSlider';
import banner from '../assets/images/banner.jpg';
import { Link } from 'react-router-dom';
import Introduce from '../components/Introduce';
import FlipCard from '../components/FlipCard';


const HomePage = () => {
    return (
        <div className="bg-white">
            <section id="home" className="pb-5">
                <div className="relative">
                    {/* Banner image */}
                    <img src={banner} alt="Banner" className="w-full h-[400px] sm:h-[500px] md:h-[700px] object-cover"/>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center">
                        <div className="grid w-full max-w-screen-xl mx-auto px-4 sm:px-8">
                            <div></div>
                            <div className="p-3 flex justify-start items-center text-left sm:text-center px-4 sm:px-8">
                                <div className=" w-[300px] lg:w-[800px] sm:p-8 rounded-lg">
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
            </section>
            <BlogSlider />
        </div>
    );
};

export default HomePage;
