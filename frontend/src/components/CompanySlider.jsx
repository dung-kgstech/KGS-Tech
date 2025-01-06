import { React, useEffect, useState } from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogPostsData from '../data/company.json'; // Import file JSON chứa bài viết
import { Link } from 'react-router-dom';

const CompanySlider = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Set posts data từ JSON vào state
        setPosts(blogPostsData);
    }, []);

    const settings = {
        infinite: true,         // Cho phép quay lại slide đầu sau khi hết
        slidesToShow: 6,        // Hiển thị 3 bài trên mỗi slide mặc định
        slidesToScroll: 1,      // Mỗi lần cuộn sẽ di chuyển 1 bài viết
        autoplay: true,         // Kích hoạt chế độ tự động chuyển slide
        autoplaySpeed: 3000,    // Thời gian chuyển slide là 3 giây
        arrows: true,           // Hiển thị các nút điều hướng (mũi tên)
        centerMode: false,      // Không sử dụng chế độ trung tâm
        responsive: [
            {
                breakpoint: 1280, // Khi màn hình có độ rộng <= 12px
                settings: {
                    slidesToShow: 4,  // Hiển thị 2 bài trên màn hình có độ rộng <= 1024px
                },
            },
            {
                breakpoint: 768,  // Khi màn hình có độ rộng <= 768px
                settings: {
                    slidesToShow: 2,  // Hiển thị 1 bài trên màn hình có độ rộng <= 768px
                },
            },
            {
                breakpoint: 450,  // Khi màn hình có độ rộng <= 300
                settings: {
                    slidesToShow: 1,  // Hiển thị 1 bài trên màn hình có độ rộng <= 768px
                },
            },
        ],
    };
    return (
        <div className="slider-container w-full max-w-screen-xl mx-auto mt-3 px-4">
            <h2 className="text-3xl text-blue-600 pb-3 text-center font-bold sm:text-4xl">Các đối tác</h2>
            <div className="border-t font-bold border-blue-600 pt-6"></div>
            <Slider {...settings}>
                {posts.map((post) => (
                    <div key={post.id} className="flex  justify-center">
                        <div className="bg-gray-200 rounded-lg shadow-lg  justify-items-center hover:shadow-xl p-3 mx-3 transition duration-300">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-[150px] h-[100px] object-cover rounded-lg mb-3"  
                            />
                            <p className="text-center">{post.title}</p> 
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CompanySlider;
