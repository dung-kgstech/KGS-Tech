import React from 'react';

const Services = () => {
    return (
        <div>
            <div className="bg-gray-100 place-items-center py-8 ">
                <div className=" w-full  max-w-screen-lg ">
                    <h2 className="text-4xl font-bold text-primary mb-8 text-center">Dịch vụ của chúng tôi</h2>
                    <p className="text-center text-lg mt-4 mb-3">Công ty chúng tôi chuyên cung cấp các dịch vụ công nghệ tiên tiến, bao gồm phát triển hệ thống ứng dụng Web, ứng dụng di động, và thiết kế website.</p>
                    <p className="text-center text-lg mb-3">Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang đến các giải pháp tối ưu, giúp doanh nghiệp của bạn cải thiện hiệu suất và tối đa hóa trải nghiệm người dùng. </p>
                    <p className="text-center text-lg mb-3">Chúng tôi luôn áp dụng công nghệ mới nhất và phương pháp phát triển linh hoạt để đảm bảo các sản phẩm của bạn không chỉ đẹp mắt mà còn hoạt động mượt mà và hiệu quả trên mọi nền tảng.</p>
                </div>
            </div>
            <div className="bg-white place-items-center pb-5">
                <div className="mt-5 w-full  max-w-screen-lg mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                        <div className="order-1">
                            <h3 className="text-3xl font-semibold mb-4">Phát triển hệ thống ứng dụng Web</h3>
                            <p className="text-lg">Chúng tôi xây dựng các trang web và ứng dụng web đáp ứng, hiện đại, được thiết kế phù hợp với nhu cầu của bạn.</p>
                        </div>
                        <div className="order-2">                        
                            <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061375/Aboutme_i2wk1k.jpg" alt="About_Me" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                        <div className="order-2 md:order-1">
                            <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061375/Phone_vbprs4.jpg" alt="Phone" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-3xl font-semibold mb-4">Phát triển ứng dụng di động</h3>
                            <p className="text-lg"> Chúng tôi giúp bạn xây dựng và phát triển các ứng dụng di động trực quan và dễ sử dụng cho IOS và Android.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                        <div className="order-1">
                            <h3 className="text-3xl font-semibold mb-4">Phát triển website</h3>
                            <p className="text-lg">Chúng tôi tạo ra các website thiết kế đẹp mắt, hiện đại và dễ sử dụng, giúp nâng cao trải nghiệm người dùng.</p>
                        </div>
                        <div className="order-2">
                            <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061373/Website-design_pncjjx.jpg" alt="Website-design" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
