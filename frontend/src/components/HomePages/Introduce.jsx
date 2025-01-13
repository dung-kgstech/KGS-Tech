import { React, useState } from "react";
import { motion, useInView } from 'framer-motion';
import { useTranslation } from "react-i18next";

const Introduce = () => {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-gray-100 flex items-center pt-10 justify-center flex-col px-4 sm:px-8">
            <div className="w-full place-items-center">
                <motion.div
                    className="flex flex-col  max-w-screen-lg place-items-center md:flex-row gap-12 mb-16 items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                >
                    <motion.div className="md:w-[500px] flex-1 lg:w-[600px] sm:w-full"
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                    >
                        <h2 className="text-2xl sm:text-4xl text-primary pb-3 text-center font-bold">
                            KGS-TECH
                        </h2>
                        <p className="text-base sm:text-lg text-center sm:text-left">
                            Chúng tôi tự hào cung cấp những giải pháp công nghệ sáng tạo, hiện đại và hiệu quả, giúp tối ưu hóa quy trình công việc và nâng cao hiệu suất cho doanh nghiệp của bạn.
                            <br />
                            Với đội ngũ chuyên gia giàu kinh nghiệm và luôn cập nhật những xu hướng công nghệ mới nhất, chúng tôi cam kết mang đến những sản phẩm và dịch vụ tối ưu nhất, đáp ứng nhu cầu ngày càng cao của thị trường.
                            <br />
                            Chúng tôi tin rằng, với các giải pháp công nghệ tiên tiến, doanh nghiệp của bạn sẽ vươn lên mạnh mẽ và đạt được những thành tựu vượt trội.
                        </p>
                    </motion.div>

                    <motion.div className="w-fit p-6 sm:mt-8 md:mt-0"
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                    >
                        <img
                            src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061375/Company_fb7v8z.jpg"
                            alt="Company"
                            className="w-[250px] sm-[350px] md:w-[400px] lg:w-[600px] place-self-end h-auto object-cover rounded-lg shadow-lg"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Introduce;
