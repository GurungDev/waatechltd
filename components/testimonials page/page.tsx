import { div } from "framer-motion/client";
import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = () => {
  const testimonialList = [
    {
      name: "Maximilian S.",
      testimonial:
        "I was very satisfied with the service. The agency perfectly implemented my ideas, and the communication was consistently pleasant. The landing page has significantly increased my conversion rate!",
    },
    {
      name: "Anna K.",
      testimonial:
        "The collaboration was straightforward and professional. I particularly appreciated the creative suggestions that were made to me. My new website looks fantastic and is user-friendly!",
    },
    {
      name: "Peter R.",
      testimonial:
        "I initially had some concerns as I have no technical knowledge. But the team guided me through the entire process and explained everything to me. I can only recommend the agency!",
    },
    {
      name: "Laura T.",
      testimonial:
        "The implementation of my ideas was quick and efficient. The landing page has helped us gain many new customers. I am very satisfied with the result and the team's quick response time.",
    },
    {
      name: "Daniela M.",
      testimonial:
        "The results speak for themselves! The website was not only aesthetically pleasing but also optimized for search engines. I am impressed by the team's professionalism and dedication.",
    },
    {
      name: "Rudolf M.",
      testimonial:
        "The agency exceeded my expectations. The new landing page is attractively designed and has significantly boosted our conversion rate.",
    },
    {
      name: "Stephan L.",
      testimonial:
        "The collaboration went smoothly. The team was open to my ideas and creatively implemented them. I am very satisfied with the final result.",
    },
    {
      name: "Robert K.",
      testimonial:
        "The project was completed within a reasonable timeframe. The communication was clear and helpful, making the entire process easier.",
    },
    {
      name: "Bettina D.",
      testimonial:
        "The agency understood and implemented my requirements well. The new website is user-friendly and has already received positive feedback from our customers.",
    },
    {
      name: "Darius W.",
      testimonial:
        "The professional approach and technical know-how of the team have ensured that our website is both visually appealing and functional. I can recommend their services.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-[1100px]:grid-cols-3 xl:grid-cols-4 gap-6">
      {testimonialList?.map((data, key) => {
        return (
          <div key={key} className="border-2 bg-neutral-100 p-10 rounded-md ">
            <div className="flex gap-1">
              <FaStar size={20} className="text-yellow-500" />
              <FaStar size={20} className="text-yellow-500" />
              <FaStar size={20} className="text-yellow-500" />
              <FaStar size={20} className="text-yellow-500" />
              <FaStar size={20} className="text-yellow-500" />
            </div>
            <p className="py-7">{data?.testimonial}</p>
            <p className="caption font-[800]">{data?.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialCard;
