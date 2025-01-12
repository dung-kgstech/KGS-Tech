import { React, useEffect, useState } from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogPostsData from '../../data/blog.json'; // Import file JSON chứa bài viết
import { Link } from 'react-router-dom';

const PostSlider = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Set posts data từ JSON vào state
    setPosts(blogPostsData);
  }, []);

  const settings = {
    infinite: true,         // Cho phép quay lại slide đầu sau khi hết
    slidesToShow: 3,        // Hiển thị 3 bài trên mỗi slide mặc định
    slidesToScroll: 1,      // Mỗi lần cuộn sẽ di chuyển 1 bài viết
    autoplay: true,         // Kích hoạt chế độ tự động chuyển slide
    autoplaySpeed: 3000,    // Thời gian chuyển slide là 3 giây
    arrows: true,           // Hiển thị các nút điều hướng (mũi tên)
    centerMode: false,      // Không sử dụng chế độ trung tâm
    responsive: [
      {
        breakpoint: 1280, // Khi màn hình có độ rộng <= 1280px
        settings: {
          slidesToShow: 2,  // Hiển thị 2 bài trên màn hình có độ rộng <= 1024px
        },
      },
      {
        breakpoint: 768,  // Khi màn hình có độ rộng <= 768px
        settings: {
          slidesToShow: 1,  // Hiển thị 1 bài trên màn hình có độ rộng <= 768px
        },
      },
    ],
  };

  return (
    <section id="BlogSlider" className="p-5 mt-5 bg-gray-100">
      <h2 className="text-3xl text-primary pb-3 text-center font-bold">Tin tức</h2>
      <div className=" w-full max-w-screen-xl place-items-center flex flex-col justify-between lg:flex-row mx-auto px-4">
          {posts.map((post) => (
            <div key={post.id} className="p-3 sm:w-[400px] md:w-[600px] w-[300px]">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 h-[310px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <Link to={`/blog/${post.id}`} className="text-xl p-5 mx-3  font-semibold text-blue-600 mb-4">
                  {post.title}
                </Link>
                <p className="text-gray-700  mx-3 h-max mb-5 line-clamp-3">
                  {post.content}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default PostSlider;
