import { React, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogPostsData from '../data/blog.json'; 
import { Link } from 'react-router-dom';

const PostSlider = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPostsData);
  }, []);

  return (
    <section id="BlogSlider" className="p-5 mt-5 bg-gray-100">
      <h2 className="text-3xl text-primary pb-3 text-center font-bold">Tin tức</h2>
      <div className="max-w-screen-xl place-items-center grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto px-4">
        {/* Post 1 */}
        <div className="lg:col-span-1 p-3 lg:w-full h-full w-auto  flex flex-col justify-between">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 h-full">
            <img
              src={posts[0]?.image}
              alt={posts[0]?.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <Link to={`/blog/${posts[0]?.id}`} className="text-xl p-5 mx-3 font-semibold text-blue-600 mb-4">
              {posts[0]?.title}
            </Link>
            <p className="text-gray-700 mx-3 h-max mb-5 line-clamp-3">
              {posts[0]?.content}
            </p>
          </div>
        </div>

        {/* Post 2 & Post 3 */}
        <div className="lg:col-span-1 p-3 lg:w-full h-auto w-full flex flex-col gap-8">
          {posts.slice(1, 3).map((post) => (
            <div key={post.id}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 h-[310px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <Link to={`/blog/${post.id}`} className="text-xl p-5 mx-3 font-semibold text-blue-600 mb-4">
                  {post.title}
                </Link>
                <p className="text-gray-700 mx-3 h-max mb-5 line-clamp-3">
                  {post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostSlider;
