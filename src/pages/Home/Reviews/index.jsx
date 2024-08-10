import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import reviewsData from './reviewsData';
import ReviewCard from './ReviewCard';
import ResponsiveContainer from '../../../components/ResponsiveMainContainer';
import reviewsAnimation from './animations';

const Reviews = () => {
  // References for GSAP animations
  const reviewsContainerRef = useRef(null);

  useEffect(() => {
    // GSAP animation context to scope the animations
    const context = gsap.context(() => {
      reviewsAnimation(reviewsContainerRef);
    });

    // Cleanup function to revert GSAP context on component unmount
    return () => context.revert();
  }, []);

  return (
    <div className="py-20 bg-customGrey from-blue-200 to-purple-200 overflow-hidden px-4 text-center relative z-10">
      <ResponsiveContainer>
        <div ref={reviewsContainerRef}>
          {/* Section title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          {/* Section description */}
          <p className="text-lg text-gray-700 mb-12">
            Hear from our satisfied customers!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Render each ReviewCard */}
            {reviewsData.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Reviews;
