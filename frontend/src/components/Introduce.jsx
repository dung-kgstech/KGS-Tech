import { React, useState } from "react";

const Introduce = () => {
    return (
        <div className="w-full bg-gray-100 flex items-center pt-10 justify-center flex-col px-4 sm:px-8">
            <div className="w-full lg:w-[1280px]">
                <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="w-2/3 md:w-[500px]  lg:w-full">
                        <h2 className="text-2xl sm:text-4xl text-primary pb-3 text-center font-bold">
                            KGS-TECH
                        </h2>
                        <p className="text-base sm:text-lg text-center sm:text-left">
                            Chúng tôi tự hào cung cấp những giải pháp công nghệ sáng tạo, hiện đại và hiệu quả, giúp tối ưu hóa quy trình công việc và nâng cao hiệu suất cho doanh nghiệp của bạn.
                            <br />
                            Với đội ngũ chuyên gia giàu kinh nghiệm và luôn cập nhật những xu hướng công nghệ mới nhất, chúng tôi cam kết mang đến những sản phẩm và dịch vụ tối ưu nhất, đáp ứng nhu cầu ngày càng cao của thị trường.
                            <br />
                            Chúng tôi tin rằng, với các giải pháp công nghệ tiên tiến, doanh nghiệp của bạn sẽ vươn lên mạnh mẽ và đạt được những thành tựu vượt trội.
                        </p>
                    </div>
                    <div className=" w-fit  md:w-[500px] lg:2/3">
                        <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061375/Company_fb7v8z.jpg" alt="Company" className="w-[100%] place-self-end h-auto object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
