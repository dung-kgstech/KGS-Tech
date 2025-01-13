import { React, useState, useEffect } from "react";
import Post from "../../data/blog.json"; // Import file JSON chứa bài viết
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto p-8">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Blogs</h2>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Post.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                {post.author} • {post.date}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.content}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          View All Our Resources →
        </button>
      </div>
    </section>
  );
};

export default Blog;
