// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Post = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState();

//   console.log(id);
//   useEffect(() => {
//     window.scrollTo(0, 0);

//     axios
//       .get(`http://127.0.0.1:8000/api/posts/${id}`)
//       .then((response) => {
//         console.log(response.data); // In ra dữ liệu để kiểm tra cấu trúc
//         setPost(response.data.data); // Lưu dữ liệu vào state
//       })
//       .catch((error) => {
//         console.error("Có lỗi khi gọi API:", error);
//       });
//   }, [id]);
//   console.log(post);

//   // Kiểm tra nếu chưa có dữ liệu bài viết
//   if (!post) {
//     return (
//       <div className="text-center py-20">
//         <h1 className="text-3xl font-semibold">
//           Bài viết không tồn tại hoặc đang tải...
//         </h1>
//       </div>
//     );
//   }

//   if (!post.image || !post.title || !post.content) {
//     return (
//       <div className="text-center py-20">
//         <h1 className="text-3xl font-semibold">
//           Dữ liệu bài viết không hợp lệ
//         </h1>
//       </div>
//     );
//   }

//   // Render thông tin bài viết
//   return (
//     <section id="post" className="bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <img
//             src={post.image} // Sử dụng `post.image` vì `post` là một đối tượng duy nhất
//             alt={post.title}
//             className="w-full h-96 object-cover rounded-lg mb-8"
//           />
//           <h1 className="text-4xl font-semibold text-blue-600 mb-6">
//             {post.title}
//           </h1>
//           <p className="text-gray-700 mb-6">{post.content}</p>
//           <a
//             href="/blog"
//             className="text-blue-600 hover:text-blue-800 font-semibold"
//           >
//             Quay lại danh sách bài viết
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Post;
