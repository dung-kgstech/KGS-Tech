import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const Bussiness = () => {
  return (
    <section id="Bussiness" className="py-20 bg-gray-50">
    <div className=" mx-auto text-center">
        <div className=" justify-items-center">
        <h1 className="text-4xl font-semibold text-blue-600 mb-8">Our Services</h1>
        <p className="text-lg text-gray-700 mb-12">
          At KGS Tech, we specialize in delivering high-quality, scalable solutions that help businesses thrive in the digital world.
        </p>

        <div className="grid grid-cols-1 w-[1280px] items-center center md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Phát triển hệ thống ứng dụng Web */}
          <div className="service-card bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Phát triển hệ thống ứng dụng Web</h3>
            <p className="text-gray-700 mb-6">
              Chúng tôi cung cấp dịch vụ phát triển hệ thống ứng dụng web tùy chỉnh, từ những ứng dụng phức tạp đến các trang web thông minh. Mục tiêu của chúng tôi là giúp bạn tối ưu hóa quy trình công việc và mang đến trải nghiệm người dùng tốt nhất.
            </p>
            <ul className="list-disc pl-5">
              <li>Ứng dụng Web Tùy chỉnh</li>
              <li>Tích hợp hệ thống mạnh mẽ</li>
              <li>Giao diện người dùng dễ sử dụng</li>
            </ul>
          </div>

          {/* Phát triển ứng dụng di động */}
          <div className="service-card bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Phát triển ứng dụng di động</h3>
            <p className="text-gray-700 mb-6">
              Chúng tôi phát triển các ứng dụng di động cho cả iOS và Android. Dịch vụ của chúng tôi đảm bảo mang lại trải nghiệm người dùng mượt mà và hiệu suất tối ưu cho mọi ứng dụng.
            </p>
            <ul className="list-disc pl-5">
              <li>Ứng dụng iOS và Android</li>
              <li>Thiết kế giao diện đẹp và tối ưu</li>
              <li>Tích hợp API và các tính năng mới nhất</li>
            </ul>
          </div>

          {/* Phát triển website */}
          <div className="service-card bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Phát triển website</h3>
            <p className="text-gray-700 mb-6">
              Chúng tôi cung cấp dịch vụ phát triển website từ cơ bản đến nâng cao, bao gồm cả các trang web thương mại điện tử, blog, và website giới thiệu doanh nghiệp. Chúng tôi tạo ra những website đẹp, thân thiện với người dùng và dễ quản lý.
            </p>
            <ul className="list-disc pl-5">
              <li>Website thương mại điện tử</li>
              <li>Website doanh nghiệp, blog, portfolio</li>
              <li>Tối ưu hóa tốc độ và khả năng tìm kiếm</li>
            </ul>
          </div>
        </div>
    </div>

    <div className="max-w-screen-lg mx-auto p-5">
    <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900  md:col-span-4 p-10 text-white">
            <div className=" flex flex-col sm:items-start">
              <h3 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h3>  
            </div>           
            <div className="border-t border-gray-300 pt-6"></div>
            <div className=" flex flex-col ">
              <div>
                <p className="text-xl">CÔNG TY TNHH KGS TECH</p>
                <div className="flex mt-2">
                  <LocationOnIcon />
                  <span className="text-sm ">40 Đường 16, Phường An Phú, Thành phố Thủ Đức, <br></br>Thành phố Hồ Chí Minh, Việt Nam</span>
                </div>
                <div className="flex  mt-2">
                  <LocalPhoneIcon />
                  <p className="text-sm ml-2">Số Điện Thoại: 039 *** ****</p>
                </div>
                <div className="flex mt-2">
                  <EmailIcon />
                  <p className="text-sm ml-2">Email: KSG_tech@mail.com</p>
                </div>
              </div>
            </div>
          </div>
        <form action="https://fabform.io/f/{form-id}" method="post" className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Jane"/>
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" type="text" placeholder="Doe"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Email Address
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email" type="email" placeholder="********@*****.**"/>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Your Message
                    </label>
                    <textarea rows="10"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                    <div className="md:flex md:items-center">
                        <label className="block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox"/>
                            <span className="text-sm">
                                Send me your newsletter!
                            </span>
                        </label>
                    </div>
                    <button
                        className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit">
                        Send Message
                    </button>
                    
                </div>
<a href="https://veilmail.io/e/FkKh7o" className="font-medium text-blue-600 hover:underline">Or click here to reveal our protected email address</a>
    
            </div>

        </form>

    </div>
</div>

</div>
      
    </section>
  );
};

export default Bussiness;
