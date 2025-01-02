import React, { useState } from 'react';
import About from '../assets/images/AboutMe.jpg';
import Phone from '../assets/images/Phone.jpg';
import Website from '../assets/images/Website-design.jpg';


const Services = () => {
    return(
    <div className="bg-white pb-5">
        
        <div className="mt-5 justify-items-center p-4"> 
        <h2 className="text-4xl font-semibold text-blue-600 mb-8">Dịch vụ của chúng tôi</h2>
        <div className="border-t border-black pt-6"></div>
            <div className="grid grid-cols-1 items-center  w-[1280px]  md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Phát triển hệ thống ứng dụng Web</h2>
                    <p className="text-lg">Chúng tôi xây dựng các trang web và ứng dụng web đáp ứng, hiện đại, được thiết kế phù hợp với nhu cầu của bạn.</p>
                </div>
                <div>
                    <img 
                        src={About}
                        alt="Company" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg" 
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 items-center  w-[1280px]  md:grid-cols-2 gap-12 mb-16">
                <div>
                    <img 
                        src={Phone} 
                        alt="Phone" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg" 
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Phát triển ứng dụng di động</h2>
                    <p className="text-lg">
                        Chúng tôi giúp bạn xây dựng và phát triển các ứng dụng di động trực quan và dễ sử dụng cho IOS và Android.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 items-center  w-[1280px]  md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Phát triển website</h2>
                    <p className="text-lg">Chúng tôi tạo ra các website thiết kế đẹp mắt, hiện đại và dễ sử dụng, giúp nâng cao trải nghiệm người dùng.</p>
                </div>
                <div>
                    <img 
                        src={Website} 
                        alt="Website-design" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg" 
                    />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Services;
