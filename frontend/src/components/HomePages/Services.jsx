
import { React, useState } from "react";

const Services = () => {
    return (
        <div className="max-w-7xl p-10 mx-auto">
            <h3 className="text-3xl text-primary py-7 text-center  font-bold sm:text-4xl">Dịch vụ mà chúng tôi cung cấp</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                <div className="text-center rounded-md bg-white p-5">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Member 1"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">Nguyễn Văn A</h3>
                    <p className="text-gray-500">Giám đốc điều hành</p>
                    <p className="mt-2">Nguyễn Văn A là người sáng lập và giám đốc điều hành của KGS Tech, với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ.</p>
                </div>
                <div className="text-center rounded-md bg-white p-5">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Member 2"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">Trần Thị B</h3>
                    <p className="text-gray-500">Trưởng phòng Kỹ thuật</p>
                    <p className="mt-2">Trần Thị B là trưởng phòng kỹ thuật của công ty, chuyên chịu trách nhiệm về việc phát triển phần mềm và công nghệ.</p>
                </div>
                <div className="text-center rounded-md bg-white p-5">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Member 3"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">Lê Minh C</h3>
                    <p className="text-gray-500">Chuyên viên thiết kế UX/UI</p>
                    <p className="mt-2">Lê Minh C là chuyên viên thiết kế UX/UI, người đã tạo ra những giao diện người dùng tuyệt vời cho các ứng dụng của chúng tôi.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;