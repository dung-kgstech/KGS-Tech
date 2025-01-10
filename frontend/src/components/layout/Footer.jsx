import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    //
    <footer className=" bg-secondary text-white text-xl py-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 p-10 mb-8">
          <div className="flex-1">
            <div className=" flex flex-col sm:items-start">
              <h3 className="text-2xl font-bold p-2 mb-4">Thông tin liên hệ</h3>
            </div>
            <div className="border-t border-gray-300 pt-6"></div>
            <div className=" flex flex-col ">
              <div>
                <p className="text-xl p-2">CÔNG TY TNHH KGS TECH</p>
                <div className="flex p-2 mt-2">
                  <LocalPhoneIcon />
                  <p className="text-xl ml-2">Số Điện Thoại:</p>
                  <a href="tel:039*****" className="text-xl hover:text-orange-400 ml-2">039 *** ****</a>
                </div>
                <div className="flex p-2 mt-2">
                  <EmailIcon />
                  <p className="text-xl ml-2">Email:</p>
                  <a href="mailto:KSG_tech@mail.com" className="text-xl w-fit hover:text-orange-400 ml-2">KSG_tech@mail.com</a>
                </div>
                <div className="mt-5 ">
                  <form action="https://fabform.io/f/{form-id}" method="post" className="md:col-span-8 rounded-lg shadow-md">
                    <div className="flex flex-wrap mx-3 mb-6">
                      <div className="w-full">
                        <label className="block uppercase tracking-wide text-white text-2xl font-bold mb-2" htmlFor="grid-email">Nhận thông tin từ chúng tôi</label>
                        <input className="appearance-none block w-full bg-[#314458] text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#314458] focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col ">
              <div>
                <h3 className="text-2xl font-bold p-2 mb-4">Về chúng tôi</h3>
                <div className="border-t border-gray-300 pt-6"></div>
                <ul className="space-y-2">
                  <li><Link to="/" className="hover:text-orange-400 p-2">Trang chủ</Link></li>
                  <li><Link to="/company" className="hover:text-orange-400 p-2">Công ty</Link></li>
                  <li><Link to="/business" className="hover:text-orange-400 p-2">Dịch vụ</Link></li>
                  <li><Link to="/blog" className="hover:text-orange-400 p-2">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className=" flex flex-col ">
              <div>
                <h3 className="text-2xl font-bold mb-4 p-2">Địa chỉ của chúng tôi</h3>
                <div className="border-t border-gray-300 pt-6"></div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9415718072964!2d106.75050664459913!3d10.806322316442303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175266a5a5476ab%3A0x1010bc2f036b5066!2zNDAgxJDGsOG7nW5nIHPhu5EgMTYsIEFuIFBow7osIFF14bqtbiAyLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1736471845452!5m2!1sen!2s"
                  className="w-[350px] p-2 h-[250px] sm:w-[540px] md:w-[380px]"
                  allowfullscreen=""
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t place-items-center border-gray-300 pt-6">
          <div className="flex flex-col justify-center ">
            <p className="text-sm">&copy; 2024 KGS-TECH. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
