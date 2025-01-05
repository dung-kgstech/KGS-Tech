import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import blogPostsData from '../data/blog.json'; // Import file JSON chứa bài viết

const Blog = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Set posts data từ JSON vào state
    setPosts(blogPostsData);
  }, []);

  // lấy bằng cách dùng api từ laravel
  // useEffect(() => {
  //   // axios.get('http://127.0.0.1:8000/api/posts') //chạy được qua localhost
  //   axios.get('http://localhost/api/posts')// chạy được cho docker
  //     .then(response => {
  //       setPosts(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Có lỗi khi gọi API:', error);
  //     });
  // }, []);

 
  
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tiêu đề trang blog */}
        <h1 className="text-4xl font-semibold text-center text-blue-600 mb-12">Blog Của Chúng Tôi</h1>
        

        {/* Nội dung chính và sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Danh sách bài viết */}
          <div className="col-span-3">
            <div className="space-y-12">
              {posts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`}  // Link đến trang chi tiết bài viết
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer block"
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-3xl font-semibold text-blue-600 mb-4">{post.title}</h2>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Thanh bên (Sidebar) */}
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Bài Viết Mới Nhất</h3>
              <ul className="space-y-4">
                {posts.map((post) => (
                  <li key={post.id}>
                    <Link to={post.link} className="text-gray-700 hover:text-blue-600">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Danh Mục</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/category/web-development" className="text-gray-700 hover:text-blue-600">Web Development</Link>
                </li>
                <li>
                  <Link to="/category/mobile-apps" className="text-gray-700 hover:text-blue-600">Ứng Dụng Di Động</Link>
                </li>
                <li>
                  <Link to="/category/ui-ux" className="text-gray-700 hover:text-blue-600">UI/UX Design</Link>
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
