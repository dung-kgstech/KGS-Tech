import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

function Footer() {
  return (
    <footer className="bg-accent text-white py-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col sm:flex-col md:flex-row gap-8 mb-8">
          {/* Thông tin công ty */}
          <div className="flex-1">
            <div className=" flex flex-col sm:items-start">
              <h3 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h3>  
            </div>           
            <div className="border-t border-gray-300 pt-6"></div>
            <div className=" flex flex-col ">
              <div>
                <p className="text-xl">CÔNG TY TNHH KGS TECH</p>
                <div className="flex  mt-2">
                  <LocationOnIcon />
                  <span className="text-sm ml-2">40 Đường 16, Phường An Phú, Thành phố Thủ Đức, <br></br>Thành phố Hồ Chí Minh, Việt Nam</span>
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

          <div className="flex-1">
            <div className=" flex flex-col ">
              <div>
                <h3 className="text-xl font-semibold mb-4">Danh mục</h3>
                <div className="border-t border-gray-300 pt-6"></div>
                  <ul className="space-y-2">
                    <li><a href="/home" className="hover:text-orange-400">Trang chủ</a></li>
                    <li><a href="/company" className="hover:text-orange-400">Công ty</a></li>
                    <li><a href="/business" className="hover:text-orange-400">Dịch vụ</a></li>
                    <li><a href="/blog" className="hover:text-orange-400">Blog</a></li>
                  </ul>
                </div>
              </div>
          </div>
          
          <div className="flex-1">
            <div className=" flex flex-col ">
              <div>
                <h3 className="text-xl font-semibold mb-4">Về KGS-TECH</h3>
                <div className="border-t border-gray-300 pt-6"></div>
                  <ul className="space-y-2">
                    <li><a href="/home" className="hover:text-orange-400">Sứ mệnh</a></li>
                    <li><a href="/company" className="hover:text-orange-400">Giá trị cốt lõi</a></li>
                    <li><a href="/services" className="hover:text-orange-400">Các cột mốc chính</a></li>
                    <li><a href="/contact" className="hover:text-orange-400">Thành Viên</a></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col justify-center ">
            <p className="text-sm mb-4 sm:mb-0">&copy; 2024 KGS-TECH. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
