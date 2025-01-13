import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="mx-auto place-items-center rounded-lg shadow-md ">
      <div className="relative w-full h-[300px]">
        {/* Hình nền */}
        <img
          src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736398321/technology-contact-background_gnoga0.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />

        {/* Nội dung trên background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-8">
            <motion.div
              className="w-full lg:w-[800px] md:w-[800px] sm:p-8 bg-black bg-opacity-50 p-6 rounded-lg"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">
                Chào mừng đến với KGS-Tech
              </h2>

              <motion.p
                className="text-base sm:text-lg mb-4 text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Chúng tôi cung cấp các giải pháp công nghệ hàng đầu, bao gồm
                phát triển ứng dụng Web, ứng dụng di động, và thiết kế website.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg mb-4 text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Cùng với đội ngũ chuyên gia, chúng tôi cam kết mang đến giải
                pháp tối ưu và hiệu quả cho doanh nghiệp của bạn.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="lg:w-[900px] md:w-[600px] w-[300px] py-5">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          {/* Company and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("company", {
                  required: "Company name is required",
                })}
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              {errors.company && (
                <span className="text-red-500 text-sm">
                  {errors.company.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Company email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Phone and Job Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Job title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("jobTitle", { required: "Job title is required" })}
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              {errors.jobTitle && (
                <span className="text-red-500 text-sm">
                  {errors.jobTitle.message}
                </span>
              )}
            </div>
          </div>

          {/* How can we help you */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              How can we help you? <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("help", { required: "This field is required" })}
              className="w-full border border-blue-300 rounded-lg px-4 py-2"
              rows="4"
            ></textarea>
            {errors.help && (
              <span className="text-red-500 text-sm">
                {errors.help.message}
              </span>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              {...register("usBusiness", {
                required: "This field is required",
              })}
              className="mr-2"
            />
            <label className="text-sm font-medium">
              My company is a US-based business{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit →
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormComponent;
