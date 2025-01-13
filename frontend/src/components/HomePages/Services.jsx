import { React } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section
      id="services"
      className="p-10 mx-auto place-items-center bg-gray-100"
    >
      <h2 className="text-4xl font-bold text-blue-600 mb-8">
        Dịch vụ của chúng tôi
      </h2>
      <p className="max-w-7xl text-center text-xl  text-gray-600">
        Dịch vụ của chúng tôi mang đến các giải pháp sáng tạo và hiệu quả nhằm
        đáp ứng nhu cầu của khách hàng.<br></br>Chúng tôi cam kết cung cấp giá
        trị vượt trội, hỗ trợ khách hàng đạt được mục tiêu kinh doanh một cách
        nhanh chóng và hiệu quả nhất.
      </p>
      <div className="grid grid-cols-1 max-w-7xl place-items-center md:grid-cols-3 gap-8 p-8 ">
        <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg overflow-hidden p-10">
          <Link to="/business" className="place-items-center">
            <img
              src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061375/Linkboutme_i2wk1k.jpg"
              alt="Web Development"
              className="w-24 h-24 object-cover rounded-full shadow-md mb-4 transition-transform transform group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500">
              Phát triển Web
            </h3>
            <p className="text-sm text-gray-600">
              Xây dựng các trang web hiện đại, đáp ứng nhu cầu của bạn.
            </p>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center">
          <Link
            to="/business"
            className="place-items-center  bg-white rounded-lg shadow-lg overflow-hidden p-10"
          >
            <img
              src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061375/Phone_vbprs4.jpg"
              alt="Mobile Development"
              className="w-24 h-24 object-cover rounded-full shadow-md mb-4 transition-transform transform group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500">
              Ứng dụng Di động
            </h3>
            <p className="text-sm text-gray-600">
              Phát triển ứng dụng iOS & Android thân thiện và dễ sử dụng.
            </p>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center">
          <Link
            to="/business"
            className="place-items-center  bg-white rounded-lg shadow-lg overflow-hidden p-10"
          >
            <img
              src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736750392/html-css-collage-concept_yk0tfn.jpg"
              alt="Website Design"
              className="w-24 h-24 object-cover rounded-full shadow-md mb-4 transition-transform transform group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500">
              Thiết kế Website
            </h3>
            <p className="text-sm text-gray-600">
              Tạo ra các thiết kế đẹp mắt, hiện đại, nâng cao trải nghiệm người
              dùng.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
