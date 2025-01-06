import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Services from '../components/Services';
import CustomerReview from '../components/CustomerReview';
import React, { useEffect, useState } from 'react';
const Bussiness = () => {


  return (
    
    <section id="Bussiness">
      <div>
        <img src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061376/BanerServies_mewami.jpg" alt="Baner-Servies" className="w-full h-[400px] object-cover" />
      </div>

      <div className="mx-auto text-center py-8">
        <Services />
      </div>

      <div className="mx-auto text-center py-8">
        <CustomerReview />
      </div>

      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="bg-gray-900 text-white p-6 rounded-lg md:col-span-4">
            <h3 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="border-t border-gray-300 pt-6">
              <p className="text-xl">CÔNG TY TNHH KGS TECH</p>
              <div className="flex mt-2">
                <LocationOnIcon />
                <span className="text-sm ml-2">40 Đường 16, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex mt-2">
                <LocalPhoneIcon />
                <p className="text-sm ml-2">Số Điện Thoại: 039 *** ****</p>
              </div>
              <div className="flex mt-2">
                <EmailIcon />
                <p className="text-sm ml-2">Email: KSG_tech@mail.com</p>
              </div>
            </div>
          </div>

          <form action="https://fabform.io/f/{form-id}" method="post" className="md:col-span-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">Tên</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">Họ</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">Địa chỉ Email</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">Tin nhắn của bạn</label>
                <textarea rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
              </div>

              <div className="flex justify-between w-full px-3">
                <button className="shadow bg-indigo-600 w-full hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit"> Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Bussiness;
