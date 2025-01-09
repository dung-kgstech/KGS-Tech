
import { React, useState } from "react";


const Achievement = () => {
    return (
        <div className="flex justify-center h-full items-center ">
            <div className=" grid place-items-center gap-10 md:grid-cols-6  max-w-7xl">
                <div className="flex items-center justify-center gap-2 lg:w-[200px] flex-col">
                    <p className="text-4xl font-bold font-beVietnam text-blue-500">30+</p>
                    <p className="font-semibold text-md text-center font-beVietnam">Công ty hợp tác</p>
                </div>

                <div className="flex items-center justify-center gap-2 lg:w-[200px] flex-col">
                    <p className="text-4xl font-bold  font-beVietnam text-green-300">100+</p>
                    <p className="font-semibold text-md text-center font-beVietnam">Nhân viên</p>
                </div>

                <div className="flex items-center justify-center gap-2 lg:w-[200px] flex-col">
                    <p className="text-4xl font-bold  font-beVietnam text-sky-200">4.8/5</p>
                    <p className="font-semibold text-md text-center font-beVietnam">Đánh giá</p>
                </div>

                <div className="flex items-center justify-center gap-2 lg:w-[200px] flex-col">
                    <p className="text-4xl font-bold  font-beVietnam text-blue-500">99%</p>
                    <p className="font-semibold text-md text-center font-beVietnam">Khách hàng hài lòng</p>
                </div>

                <div className="flex items-center justify-center gap-2 lg:w-[200px] flex-col">
                    <p className="text-4xl font-bold  font-beVietnam  text-green-300">100+</p>
                    <p className="font-semibold text-md text-center font-beVietnam">Quốc gia</p>
                </div>

                <div className="flex items-center justify-center gap-2 lg:w-[200px] flex-col">
                    <p className="text-4xl font-bold  font-beVietnam text-sky-200">10.000+</p>
                    <p className="font-semibold text-md text-center font-beVietnam">Khách hàng</p>
                </div>

            </div>
        </div>
    );
};

export default Achievement;