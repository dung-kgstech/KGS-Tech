// HorizontalTimeline.js
import React from 'react';

const HorizontalTimeline = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Cột Mốc Công Ty (2023 - 2025)</h2>

      <div className="flex justify-between items-center">
        {/* Cột mốc 2023 */}
        <div className="relative text-center">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full mx-auto mb-4 flex justify-center items-center">
            2023
          </div>
          <div className="text-sm text-gray-600">Công ty ra mắt nền tảng công nghệ mới, cải tiến quy trình và nâng cao trải nghiệm người dùng.</div>
        </div>

        {/* Cột mốc 2024 */}
        <div className="relative text-center">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full mx-auto mb-4 flex justify-center items-center">
            2024
          </div>
          <div className="text-sm text-gray-600">Mở rộng thị trường quốc tế, ra mắt sản phẩm mới phục vụ các nhu cầu công nghệ đặc thù.</div>
        </div>

        {/* Cột mốc 2025 */}
        <div className="relative text-center">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full mx-auto mb-4 flex justify-center items-center">
            2025
          </div>
          <div className="text-sm text-gray-600">Công ty đạt được mục tiêu tăng trưởng 300% và trở thành người dẫn đầu trong lĩnh vực công nghệ.</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
