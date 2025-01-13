import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import blogPostsData from "../data/blog.json"; // Import file JSON chứa bài viết
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Set posts data từ JSON vào state
    setPosts(blogPostsData);
  }, []);

  // lấy bằng cách dùng api từ laravel
  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/posts') //chạy được qua localhost
  //     // axios.get('http://localhost/api/posts')// chạy được cho docker
  //     .then(response => {
  //       setPosts(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Có lỗi khi gọi API:', error);
  //     });
  // }, []);

  return (
    <section id="blog">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736398321/technology-contact-background_gnoga0.jpg"
          alt="Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex">
          <div className="grid items-center w-full max-w-screen-xl mx-auto">
            <div className="p-3 text-left sm:text-center px-4 sm:px-8">
              <div className="w-full flex justify-center place-items-center text-center sm:p-8 rounded-lg">
                {/* Tiêu đề */}
                <div className="w-full flex pt-10 flex-col">
                  <h1 className="text-4xl sm:text-4xl font-semibold mb-4 text-white">
                    The KGS-Tech Blogs
                  </h1>
                </div>

                {/* Thanh tìm kiếm */}
                <div className="w-full mt-6">
                  <form className="w-full lg:w-[600px]">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Tìm kiếm bài viết..."
                        className="w-full px-4 py-3 text-gray-900 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 h-full px-4 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition"
                      >
                        Tìm kiếm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl p-6">
        <h1 className="text-4xl font-semibold text-center py-5 text-blue-600 mb-12">
          Blog Của Chúng Tôi
        </h1>
        <div className="grid grid-cols-1 max-w-7xl md:grid-cols-4 gap-12">
          <div className="col-span-3">
            <div className="space-y-12">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer block"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Bài Viết Mới Nhất
              </h3>
              <ul className="space-y-4">
                {posts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={post.link}
                      className="text-gray-700 hover:text-blue-600"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Danh Mục
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/category/web-development"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/mobile-apps"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Ứng Dụng Di Động
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/ui-ux"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
