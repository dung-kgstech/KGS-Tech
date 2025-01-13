import React from "react";

const Services = () => {
  return (
    <div>
      <div className="bg-white pb-5">
        <div className="mt-5 w-full  max-w-screen-xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-1">
              <h3 className="text-3xl font-semibold mb-4">
                Phát triển hệ thống ứng dụng Web
              </h3>
              <p className="text-lg">
                Chúng tôi cung cấp dịch vụ phát triển hệ thống ứng dụng web hiện
                đại, linh hoạt và mạnh mẽ, được thiết kế để phù hợp với các nhu
                cầu kinh doanh đặc thù của bạn.
                <br></br>Từ các ứng dụng quản lý doanh nghiệp đến các hệ thống
                thương mại điện tử, đội ngũ của chúng tôi sử dụng những công
                nghệ tiên tiến như React, Laravel để mang lại hiệu suất và bảo
                mật cao.
                <br></br>Mục tiêu của chúng tôi là tạo ra các hệ thống có khả
                năng mở rộng, dễ sử dụng, và hỗ trợ sự phát triển dài hạn của
                doanh nghiệp.
              </p>
            </div>
            <div className="order-2">
              <img
                src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061375/Aboutme_i2wk1k.jpg"
                alt="About_Me"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061375/Phone_vbprs4.jpg"
                alt="Phone"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold mb-4">
                Phát triển ứng dụng di động
              </h3>
              <p className="text-lg">
                Với đội ngũ chuyên gia trong lĩnh vực phát triển di động, chúng
                tôi mang đến những ứng dụng thân thiện, hiệu năng cao trên cả
                hai nền tảng iOS và Android.
                <br></br>Sử dụng các công nghệ tiên tiến như React Native,
                Flutter, chúng tôi giúp khách hàng tiết kiệm thời gian và chi
                phí trong khi vẫn đảm bảo chất lượng ứng dụng.
                <br></br>Từ ứng dụng thương mại điện tử, mạng xã hội đến ứng
                dụng quản lý công việc, chúng tôi đảm bảo giao diện trực quan,
                trải nghiệm mượt mà, và khả năng tích hợp dễ dàng với hệ thống
                sẵn có.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-1">
              <h3 className="text-3xl font-semibold mb-4">
                Phát triển website
              </h3>
              <p className="text-lg">
                Chúng tôi chuyên thiết kế và phát triển các website chuyên
                nghiệp, sáng tạo và chuẩn SEO.
                <br></br>Với khả năng tối ưu hóa trải nghiệm người dùng (UX) và
                giao diện người dùng (UI), các website mà chúng tôi tạo ra không
                chỉ đẹp mắt mà còn thân thiện trên mọi thiết bị.
                <br></br>Từ website giới thiệu doanh nghiệp, trang blog cá nhân
                đến các trang thương mại điện tử, đội ngũ của chúng tôi luôn chú
                trọng từng chi tiết để đảm bảo tốc độ tải trang nhanh, khả năng
                tương tác cao, và dễ dàng quản lý nội dung.
              </p>
            </div>
            <div className="order-2">
              <img
                src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736750392/html-css-collage-concept_yk0tfn.jpg"
                alt="Website-design"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
