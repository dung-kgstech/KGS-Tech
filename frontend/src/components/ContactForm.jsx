
import { React, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const ContactForm = () => {
    return (
        <div  className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-2/3 text-white p-6 rounded-lg md:w-[600px]">
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

            <form action="https://fabform.io/f/{form-id}" method="post" className="md:col-span-8 p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">Tên</label>
                        <input className="appearance-none block w-full bg-[#314458] text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#314458]" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">Họ</label>
                        <input className="appearance-none block w-full bg-[#314458] text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#314458] focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-email">Địa chỉ Email Của Bạn</label>
                        <input className="appearance-none block w-full bg-[#314458] text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#314458] focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-message">Tin nhắn của bạn</label>
                        <textarea rows="10" className="appearance-none block w-full bg-[#314458] text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#314458] focus:border-gray-500"></textarea>
                    </div>

                    <div className="flex justify-between w-full px-3">
                        <button className="shadow bg-primary w-full sm:w-auto hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">Gửi Tin Nhắn</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default ContactForm;


