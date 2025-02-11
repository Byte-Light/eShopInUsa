"use client";
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    image: "", // Example: Missing image
    feedback:
      "This website helped me find the perfect laptop for my needs. The reviews and deals were incredibly helpful!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "",
    feedback:
      "Amazing platform! I saved so much on my smartphone purchase thanks to the exclusive deals here.",
    rating: 4.5,
  },
  {
    name: "Alex Johnson",
    image: "", // Example: Missing image
    feedback:
      "Highly recommend this site for tech enthusiasts. The product recommendations are spot on!",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-8 text-center hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              {/* Customer Image */}
              <div className="w-24 h-24 mx-auto mb-6">
                <img
                  src={
                    testimonial.image?.trim() || 
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      testimonial.name
                    )}&background=blue&color=white&size=128` // Valid dummy avatar URL
                  }
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full border-4 border-blue-500"
                />
              </div>

              {/* Customer Name */}
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>

              {/* Rating */}
              <div className="mt-4 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 ${
                      i < Math.floor(testimonial.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.048 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1.15 1.15 0 001.093.791h4.198c.969 0 1.371 1.24.588 1.81l-3.399 2.463a1.15 1.15 0 00-.416 1.289l1.286 3.962c.3.921-.755 1.688-1.539 1.156l-3.398-2.463a1.15 1.15 0 00-1.358 0l-3.398 2.463c-.784.532-1.838-.235-1.539-1.156l1.286-3.962a1.15 1.15 0 00-.416-1.29L2.19 9.49c-.783-.57-.38-1.81.588-1.81h4.198a1.15 1.15 0 001.093-.79l1.286-3.962z"
                    />
                  </svg>
                ))}
              </div>

              {/* Feedback */}
              <p className="mt-6 text-base text-gray-600 italic leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
