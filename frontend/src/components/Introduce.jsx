import { React, useState } from "react";
import Company from "../assets/images/Company.jpg";

const Introduce = () => {
    return (
        <div className="w-full flex items-center mt-16 justify-center flex-col px-4 sm:px-8">
            <div className="w-full lg:w-[1280px]">
                <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="w-full md:w-[500px] lg:w-full">
                        <div className="text-2xl sm:text-4xl text-blue-600 pb-3 text-center font-bold">
                            KGS-TECH
                        </div>
                        <p className="text-base sm:text-lg text-center sm:text-left">
                            Chúng tôi tự hào cung cấp những giải pháp công nghệ sáng tạo, hiện đại và hiệu quả, giúp tối ưu hóa quy trình công việc và nâng cao hiệu suất cho doanh nghiệp của bạn.
                            <br />
                            Với đội ngũ chuyên gia giàu kinh nghiệm và luôn cập nhật những xu hướng công nghệ mới nhất, chúng tôi cam kết mang đến những sản phẩm và dịch vụ tối ưu nhất, đáp ứng nhu cầu ngày càng cao của thị trường.
                            <br />
                            Chúng tôi tin rằng, với các giải pháp công nghệ tiên tiến, doanh nghiệp của bạn sẽ vươn lên mạnh mẽ và đạt được những thành tựu vượt trội.
                        </p>
                    </div>
                    <div className="w-full sm:w-[30%] md:w-[500px] lg:w-[60%]"><img src={Company} alt="Company" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
