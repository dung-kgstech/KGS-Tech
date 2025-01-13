import Services from "../components/Services";
import CustomerReview from "../components/CustomerReview";
import React, { useEffect, useState } from "react";
import Contact from "../components/layout/Contact";
import { motion } from "framer-motion";

const Bussiness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="Bussiness">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736398321/technology-contact-background_gnoga0.jpg"
          alt="Banner"
          className="w-full h-[700px] md:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="grid w-full max-w-screen-xl mx-auto px-4 sm:px-8">
            <div className="p-3 flex justify-center items-center text-left sm:text-center px-4 sm:px-8">
              <div className="w-full lg:w-[900px] md:w-[800px] place-items-center sm:p-8 rounded-lg">
                <motion.div
                  className="w-full items-center flex  pt-10 flex-col"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-4xl sm:text-4xl font-semibold mb-4  text-white text-center ">
                    Dịch vụ của chúng tôi
                  </h1>
                </motion.div>
                <motion.div
                  className="w-full flex pt-10 flex-col"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.p
                    className="sm:text-xl mb-6 text-white text-2xl text-center "
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    Công ty chúng tôi chuyên cung cấp các dịch vụ công nghệ tiên
                    tiến, bao gồm phát triển hệ thống ứng dụng Web, ứng dụng di
                    động, và thiết kế website.
                  </motion.p>

                  <motion.p
                    className=" sm:text-xl mb-6 text-white text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang
                    đến các giải pháp tối ưu, giúp doanh nghiệp của bạn cải
                    thiện hiệu suất và tối đa hóa trải nghiệm người dùng.
                  </motion.p>
                  <motion.p
                    className=" sm:text-xl mb-6 text-white text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    Chúng tôi luôn áp dụng công nghệ mới nhất và phương pháp
                    phát triển linh hoạt để đảm bảo các sản phẩm của bạn không
                    chỉ đẹp mắt mà còn hoạt động mượt mà và hiệu quả trên mọi
                    nền tảng.
                  </motion.p>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  ></motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Services />
      </div>

      <div className="mx-auto bg-gray-100 text-center py-8">
        <CustomerReview />
      </div>
    </section>
  );
};

export default Bussiness;
