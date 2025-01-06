import React from 'react';
import AboutMe from '../components/AboutMe';
import CompanySlider from '../components/CompanySlider';
import {CheckCircleOutlined}  from '@ant-design/icons';
const Company = () => {
    return (
        <section id="company">
            <div className="w-full  bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <AboutMe />
                </div>
                <div className="w-full bg-white">
                    <div className="max-w-7xl mx-auto p-8 mb-16">
                        <h2 className="text-3xl py-6 text-blue-600 pb-3 text-center font-bold sm:text-4xl">Tầm nhìn và sứ mệnh</h2>
                        <p className="text-lg  text-center">Tầm nhìn của chúng tôi là trở thành một trong những công ty hàng đầu trong lĩnh vực công nghệ, cung cấp các giải pháp sáng tạo và hiệu quả cho các doanh nghiệp trên toàn thế giới. </p>
                        <p className="text-lg text-center">Sứ mệnh của chúng tôi là mang lại những giá trị gia tăng cho khách hàng thông qua các dịch vụ chất lượng và sự đổi mới liên tục.</p>
                        <p className="text-lg text-center">Để đạt được mục tiêu này, chúng tôi đã thực hiện hành động nhằm đạt được sự cân bằng và toàn diện ở ba khía cạnh là kinh doanh, công nghệ, con người.</p>
                    </div>

                    <div className="grid grid-cols-1 max-w-7xl mx-auto p-8 mb-16 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736066041/Bussiness_p7m9i2.jpg" alt="Bussiness" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-3xl font-semibold mb-4">Kinh doanh</h3>
                            <p className="text-lg"><CheckCircleOutlined />&nbsp; Tại công ty, chúng tôi xác định mục tiêu phát triển kinh doanh bền vững, với chiến lược tối ưu hóa quy trình, nâng cao chất lượng dịch vụ và sản phẩm, đồng thời gia tăng giá trị cho khách hàng. </p>
                            <p className="text-lg"><CheckCircleOutlined />&nbsp; Chúng tôi tập trung vào việc xây dựng những mô hình kinh doanh linh hoạt, có khả năng thích ứng với thị trường thay đổi nhanh chóng, từ đó củng cố uy tín và mở rộng tầm ảnh hưởng của công ty trong ngành. </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-8 mb-16 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-3xl font-semibold mb-4">Công nghệ</h3>
                            <p className="text-lg"><CheckCircleOutlined />&nbsp;Công nghệ là yếu tố then chốt giúp chúng tôi duy trì sự đổi mới và đi đầu trong ngành.</p>
                            <p className="text-lg"><CheckCircleOutlined />&nbsp;Chúng tôi không ngừng nghiên cứu và áp dụng các giải pháp công nghệ tiên tiến nhất, từ đó tạo ra những sản phẩm và dịch vụ vượt trội.</p>
                            <p className="text-lg"><CheckCircleOutlined />&nbsp;Chúng tôi cam kết duy trì sự sáng tạo, phát triển không ngừng và mang đến những giải pháp công nghệ phù hợp với xu thế toàn cầu.</p>
                        </div>
                        <div className="order-2 md:order-1">
                            <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061376/Technology_itfhcz.jpg" alt="Technology" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-8 mb-16 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061378/Human_z1oury.jpg" alt="Human" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-3xl font-semibold mb-2">Con Người</h3>
                            <p className="text-lg"><CheckCircleOutlined />&nbsp;Con người là tài sản quý giá nhất của chúng tôi. Chúng tôi luôn chú trọng phát triển đội ngũ nhân sự chất lượng, tạo ra môi trường làm việc đầy sáng tạo và gắn kết, nơi mỗi cá nhân có thể phát huy hết tiềm năng của mình.</p>
                            <p className="text-lg text-gray-700"><CheckCircleOutlined />&nbsp;Chúng tôi tập trung vào việc đào tạo và phát triển nghề nghiệp của nhân viên, xây dựng những đội ngũ kỹ thuật và chuyên gia với sự sáng tạo, cam kết và kỹ năng chuyên môn cao.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 py-7">
                    <div className="max-w-7xl p-10 mx-auto">
                        <h3 className="text-3xl text-blue-600 py-7 text-center  font-bold sm:text-4xl">Đội ngũ của chúng tôi</h3>
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
                </div>
                <div className="p-4 m-8">
                    <CompanySlider />
                </div>
            </div>
        </section>
    );
};

export default Company;
