import { React, useState } from "react";

const FlipCard = () => {
    return (
        <div className=" w-full bg-white my-10 max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl text-primary pb-3 text-center font-bold">Những lý do bạn nên chọn công ty chúng tôi</h2>
            <div className="flex w-full items-center mt-5 justify-center">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="group relative rounded-md items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-80 w-[700px]"
                            style={{
                                backgroundImage: "url('https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736310586/security_gvf1x0.jpg')",
                                backgroundSize: 'contain',
                            }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" ></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif  text-3xl font-bold text-white">Cam Kết Bảo Mật và An Toàn</h3>
                            <p className="text-lg mb-8 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Chúng tôi luôn đảm bảo bảo mật thông tin của khách hàng với các hệ thống bảo vệ tiên tiến nhất, giúp bạn yên tâm khi sử dụng sản phẩm và dịch vụ của chúng tôi.</p>
                        </div>
                    </div>

                    <div className="group relative  rounded-md  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-80 w-[700px]  bg-custom-gradient"
                            style={{
                                backgroundImage: "url('https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736310879/Solutions_d0k7lp.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif  text-3xl font-bold text-white">Giải Pháp Tùy Chỉnh và Đổi Mới</h3>
                            <p className=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Chúng tôi không chỉ cung cấp các giải pháp công nghệ sẵn có mà còn giúp bạn xây dựng những sản phẩm tùy chỉnh, phù hợp với yêu cầu cụ thể của doanh nghiệp. Mỗi giải pháp đều được thiết kế và phát triển riêng biệt để đáp ứng nhu cầu đặc thù của khách hàng.</p>
                        </div>
                    </div>
                    <div className="group relative  rounded-md  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-80 w-[700px]"
                            style={{
                                backgroundImage: "url('https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736309866/homepage-technology_jpppbh.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif  text-3xl font-bold text-white">Ứng Dụng Các Công Nghệ Tiên Tiến</h3>
                            <p className="mb-14 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Chúng tôi sử dụng những công nghệ tiên tiến nhất, để xây dựng các sản phẩm và dịch vụ có tính cạnh tranh cao, giúp doanh nghiệp của bạn phát triển bền vững.</p>
                        </div>
                    </div>
                    <div className="group relative  rounded-md  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-80 w-[700px]"
                            style={{
                                backgroundImage: "url('https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736317903/business-calculator_mtqwaq.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif text-3xl font-bold text-white">Giải Pháp Kinh Tế và Hiệu Quả</h3>
                            <p className=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Chúng tôi hiểu rằng chi phí là một yếu tố quan trọng đối với doanh nghiệp. Vì vậy, chúng tôi cam kết cung cấp các giải pháp công nghệ không chỉ hiệu quả mà còn tiết kiệm chi phí, giúp bạn tối ưu hóa quy trình và nâng cao hiệu suất công việc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
