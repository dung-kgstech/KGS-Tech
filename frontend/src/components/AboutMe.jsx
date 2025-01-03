import React from 'react';
import Work from '../assets/images/Work.jpg';

const AboutMe = () => {
    return (
        <div className="bg-white pb-5">
            <div className="w-full">
                <div className="mt-5 justify-items-center p-4">
                <h2 className="text-3xl text-blue-600 pb-3 text-center font-bold sm:text-4xl">Về Chúng Tôi</h2>
                <div className="border-t border-black pt-6"></div>
                    <div className="grid grid-cols-1 items-center w-full md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h3 className="text-3xl font-semibold mb-4">Công Ty TNHH KGS-Tech</h3>
                            <p className="text-lg">
                                Chúng tôi là một công ty công nghệ chuyên cung cấp các giải pháp phần mềm và dịch vụ phát triển website, ứng dụng di động và thiết kế giao diện web người dùng.
                            </p>
                            <p className="text-lg mt-4">
                                Với đội ngũ chuyên gia giàu kinh nghiệm và tâm huyết, chúng tôi cam kết cung cấp những sản phẩm chất lượng cao, đáp ứng nhu cầu và yêu cầu đặc biệt của khách hàng.
                            </p>
                        </div>
                        <div>
                            <img src={Work} alt="Banner" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
