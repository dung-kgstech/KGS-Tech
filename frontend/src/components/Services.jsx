import React from 'react';
import About from '../assets/images/Aboutme.jpg';
import Phone from '../assets/images/Phone.jpg';
import Website from '../assets/images/Website-design.jpg';

const Services = () => {
    return (
        <div className="bg-white place-items-center pb-5">
            <div className="mt-5 w-full max-w-screen-lg mx-auto p-4">
                <h2 className="text-4xl font-semibold text-blue-600 mb-8 text-center">Dịch vụ của chúng tôi</h2>
                <div className="border-t w-[90%] border-blue-600 pt-6 mx-auto"></div>
                <p className="text-center text-lg mt-4 mb-8">Công ty chúng tôi chuyên cung cấp các dịch vụ công nghệ tiên tiến, bao gồm phát triển hệ thống ứng dụng Web, ứng dụng di động, và thiết kế website.</p>
                <p className="text-center text-lg mb-8">Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang đến các giải pháp tối ưu, giúp doanh nghiệp của bạn cải thiện hiệu suất và tối đa hóa trải nghiệm người dùng. </p>
                <p className="text-center text-lg mb-8">Chúng tôi luôn áp dụng công nghệ mới nhất và phương pháp phát triển linh hoạt để đảm bảo các sản phẩm của bạn không chỉ đẹp mắt mà còn hoạt động mượt mà và hiệu quả trên mọi nền tảng.</p>
                <div className="border-t border-black pt-6"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Phát triển hệ thống ứng dụng Web</h2>
                        <p className="text-lg">Chúng tôi xây dựng các trang web và ứng dụng web đáp ứng, hiện đại, được thiết kế phù hợp với nhu cầu của bạn.</p>
                    </div>
                    <div>
                        <img src={About} alt="Company" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                    <div>
                        <img src={Phone} alt="Phone" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Phát triển ứng dụng di động</h2>
                        <p className="text-lg"> Chúng tôi giúp bạn xây dựng và phát triển các ứng dụng di động trực quan và dễ sử dụng cho IOS và Android.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Phát triển website</h2>
                        <p className="text-lg">Chúng tôi tạo ra các website thiết kế đẹp mắt, hiện đại và dễ sử dụng, giúp nâng cao trải nghiệm người dùng.</p>
                    </div>
                    <div>
                        <img src={Website} alt="Website-design" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
