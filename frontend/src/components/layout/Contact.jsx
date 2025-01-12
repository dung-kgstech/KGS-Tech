// ContactSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Tiêu đề */}
        <h2 className="text-3xl font-bold mb-6">
          Liên Hệ Với Chúng Tôi
        </h2>
        
        {/* Nội dung mô tả */}
        <p className="text-lg 0 mb-8">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn. Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào, đừng ngần ngại liên hệ với chúng tôi qua mẫu liên hệ dưới đây.
        </p>
        
        {/* Button liên kết tới Contact Form */}
        <Link 
          to="/contact" 
          className="inline-block bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Liên Hệ Ngay
        </Link>
      </div>
    </section>
  );
};

export default Contact;
