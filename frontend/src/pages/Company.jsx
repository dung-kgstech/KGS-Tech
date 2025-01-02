import React from 'react';
import AboutMe from '../components/AboutMe';

const Company = () => {
    return(
        <section id="company" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
               <AboutMe/>

                {/* Tầm nhìn và Sứ mệnh */}
                <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-16">
                    <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Tầm Nhìn và Sứ Mệnh</h2>
                    <p className="text-lg text-center">
                        Tầm nhìn của chúng tôi là trở thành một trong những công ty hàng đầu trong lĩnh vực công nghệ, cung cấp các giải pháp sáng tạo và hiệu quả cho các doanh nghiệp trên toàn thế giới. Sứ mệnh của chúng tôi là mang lại những giá trị gia tăng cho khách hàng thông qua các dịch vụ chất lượng và sự đổi mới liên tục.
                    </p>
                </div>

                {/* Đội ngũ */}
                <div>
                    <h2 className="text-3xl font-semibold text-center text-blue-600 mb-12">Đội Ngũ Của Chúng Tôi</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        {/* Thành viên 1 */}
                        <div className="text-center">
                            <img 
                                src="https://via.placeholder.com/150" 
                                alt="Member 1" 
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Nguyễn Văn A</h3>
                            <p className="text-gray-500">Giám đốc điều hành</p>
                            <p className="mt-2">Nguyễn Văn A là người sáng lập và giám đốc điều hành của KGS Tech, với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ.</p>
                        </div>
                        {/* Thành viên 2 */}
                        <div className="text-center">
                            <img 
                                src="https://via.placeholder.com/150" 
                                alt="Member 2" 
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Trần Thị B</h3>
                            <p className="text-gray-500">Trưởng phòng Kỹ thuật</p>
                            <p className="mt-2">Trần Thị B là trưởng phòng kỹ thuật của công ty, chuyên chịu trách nhiệm về việc phát triển phần mềm và công nghệ.</p>
                        </div>
                        {/* Thành viên 3 */}
                        <div className="text-center">
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
          
            </div>
        </section>
    );
};

export default Company;
