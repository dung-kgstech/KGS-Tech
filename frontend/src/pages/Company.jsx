import { React, useEffect } from "react";
import CompanySlider from "../components/layout/CompanySlider";
import Memeber from "../components/Member";
import Vision from "../components/Vision";
import Value from "../components/Value";
import { Helmet } from "react-helmet";
import Contact from "../components/layout/Contact";
import { motion } from "framer-motion";

const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="company">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736322816/business-concept_cibvt8.jpg"
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
                    Giới thiệu về công ty KGS-Tech
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
                    Chúng tôi là một công ty công nghệ chuyên cung cấp các giải
                    pháp phần mềm và dịch vụ phát triển website, ứng dụng di
                    động và thiết kế giao diện web người dùng.
                  </motion.p>

                  <motion.p
                    className=" sm:text-xl mb-6 text-white text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    Với đội ngũ chuyên gia giàu kinh nghiệm và tâm huyết, chúng
                    tôi cam kết cung cấp những sản phẩm chất lượng cao, đáp ứng
                    nhu cầu và yêu cầu đặc biệt của khách hàng.
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
      <Helmet>
        <title>Giới thiệu về Công ty</title>
        <meta
          name="description"
          content="Khám phá công ty chúng tôi, các giá trị cốt lõi, tầm nhìn, và các thành viên trong đội ngũ. Cùng nhau xây dựng tương lai."
        />
        <meta
          name="keywords"
          content="Công ty, Giới thiệu công ty, Giá trị cốt lõi, Tầm nhìn, Thành viên, Công ty chúng tôi"
        />
        <meta
          property="og:title"
          content="About Our Company - Giới thiệu về Công ty"
        />
        <meta
          property="og:description"
          content="Khám phá công ty chúng tôi, các giá trị cốt lõi, tầm nhìn, và các thành viên trong đội ngũ."
        />
      </Helmet>
      <div className="w-full bg-bgcolor">
        <div id="Value" className="bg-gray-100 py-7">
          <Value />
        </div>

        <div id="Vision " className="w-full bg-white">
          <Vision />
        </div>

        <div id="Member" className="bg-gray-100 py-7">
          <Memeber />
        </div>

        <div id="Contact" className="bg-gray-100 ">
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default Company;
