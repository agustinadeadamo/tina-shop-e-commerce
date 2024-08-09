import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const FunSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const reviewRefs = useRef([]);

  reviewRefs.current = [];

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

      reviewRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !reviewRefs.current.includes(el)) {
      reviewRefs.current.push(el);
    }
  };

  const reviews = [
    {
      name: "Jane Doe",
      rating: 5,
      comment: "This product is amazing! Highly recommend to everyone.",
    },
    {
      name: "John Smith",
      rating: 4,
      comment: "Great quality, but a bit expensive.",
    },
    {
      name: "Sarah Brown",
      rating: 5,
      comment: "Exceeded my expectations. Will buy again!",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-blue-200 to-purple-200 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 ref={titleRef} className="text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p ref={textRef} className="text-lg text-gray-700 mb-12">
          Hear from our satisfied customers!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              ref={addToRefs}
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((star, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunSection;
