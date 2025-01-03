import React, { useEffect, useState } from 'react';
import reviewsData from '../data/reviews.json';  

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewsData);
    }, []);

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Khách Hàng Nói Gì Về Chúng Tôi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <p className="text-xl font-semibold text-gray-700">{review.name}</p>
                            <p className="text-gray-600 mt-4 italic">"{review.feedback}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
