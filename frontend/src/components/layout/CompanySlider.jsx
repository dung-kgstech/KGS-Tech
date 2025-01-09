import { React, useEffect, useState } from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogPostsData from '../../data/company.json'; // Import file JSON chứa bài viết
import { Link } from 'react-router-dom';

const CompanySlider = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Set posts data từ JSON vào state
        setPosts(blogPostsData);
    }, []);

    const settings = { // Cho phép quay lại slide đầu sau khi hết
        slidesToShow: 6,        
        slidesToScroll: 1,     
        autoplay: true,        
        autoplaySpeed: 3000,    
        arrows: true,          
        centerMode: false,      
        responsive: [
            {
                breakpoint: 1280, 
                settings: {
                    slidesToShow: 4,  
                },
            },
            {
                breakpoint: 768,  
                settings: {
                    slidesToShow: 2, 
                },
            },
            {
                breakpoint: 450,  
                settings: {
                    slidesToShow: 1, 
                },
            },
        ],
    };
    return (
        <div className="slider-container w-full max-w-screen-xl mx-auto mt-3 px-4">
            <h2 className="text-3xl text-primary pb-3 text-center font-bold sm:text-4xl">Đối tác</h2>
            <Slider {...settings}>
                {posts.map((post) => (
                    <div key={post.id} className="flex justify-center">
                        <div className="bg-gray-200 rounded-lg shadow-lg h-[200px] justify-items-center hover:shadow-xl p-3 mx-3 transition duration-300">
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
