import React from "react";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-100">
      <div className="max-w-screen-lg  mx-auto px-6">
        <h2 className="text-4xl text-center font-bold text-blue-600 mb-8">
          Tại sao bạn nên chọn chúng tôi
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Chúng tôi cam kết mang đến những sản phẩm và dịch vụ tốt nhất để đáp
          ứng nhu cầu của khách hàng.
        </p>

        {/* Lưới các lý do */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Lý do 1 */}
          <div className="flex items-center bg-white p-6 shadow-lg rounded-lg">
            <div
              className="flex-shrink-0 mb-4"
              style={{ width: "20%", height: "auto" }}
            >
              <HeadphonesOutlinedIcon
                className="text-blue-600"
                style={{ width: "100%", height: "30%" }}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-black mb-2">
                Chất lượng vượt trội
              </h3>
              <p className="text-gray-600">
                Sản phẩm được kiểm tra nghiêm ngặt, cam kết mang đến chất lượng
                vượt trội và sự hài lòng tối đa.
              </p>
            </div>
          </div>

          {/* Lý do 2 */}
          <div className="flex items-center bg-white p-6 shadow-lg rounded-lg">
            <div
              className="flex-shrink-0 mb-4"
              style={{ width: "20%", height: "auto" }}
            >
              <FilterDramaIcon
                className="text-blue-600"
                style={{ width: "100%", height: "30%" }}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-black mb-2">
                Công nghệ tiên tiến
              </h3>
              <p className="text-gray-600">
                Ứng dụng công nghệ hiện đại, chúng tôi mang đến giải pháp tối
                ưu, nâng cao hiệu quả và đổi mới trải nghiệm.
              </p>
            </div>
          </div>

          {/* Lý do 3 */}
          <div className="flex items-center bg-white p-6 shadow-lg rounded-lg">
            <div
              className="flex-shrink-0 mb-4"
              style={{ width: "20%", height: "auto" }}
            >
              <CurrencyExchangeIcon
                className="text-blue-600"
                style={{ width: "100%", height: "30%" }}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-black mb-2">
                Giải Pháp Kinh Tế và Hiệu Quả
              </h3>
              <p className="text-gray-600">
                Giải pháp tiết kiệm chi phí và hiệu quả cao, đáp ứng mọi nhu cầu
                với chất lượng vượt trội.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 shadow-lg rounded-lg">
            <div
              className="flex-shrink-0 mb-4"
              style={{ width: "20%", height: "auto" }}
            >
              <EmojiObjectsOutlinedIcon
                className="text-blue-600"
                style={{ width: "100%", height: "30%" }}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-black mb-2">
                Không ngừng sáng tạo và đổi mới
              </h3>
              <p className="text-gray-600">
                Chúng tôi cam kết giao hàng đúng hạn, nhanh chóng và an toàn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
