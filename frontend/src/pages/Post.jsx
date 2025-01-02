import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Để lấy tham số từ URL
import blogPostsData from '../data/blog.json'; // Import dữ liệu JSON

const Post = () => {
  const { id } = useParams(); // Lấy id bài viết từ URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Tìm bài viết theo id
    const foundPost = blogPostsData.find((post) => post.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-semibold">Bài viết không tồn tại</h1>
      </div>
    );
  }

  return (
    <section id="post" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Ảnh bài viết */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl font-semibold text-blue-600 mb-6">{post.title}</h1>
          <p className="text-gray-700 mb-6">{post.content}</p>
          <a
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Quay lại danh sách bài viết
          </a>
        </div>
      </div>
    </section>
  );
};

export default Post;
