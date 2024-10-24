"use client";
import Lottie from "lottie-react";
import React from "react";
import { BsFileArrowUpFill } from "react-icons/bs";
import animation from "../../animations/profile.json";
import { motion } from "framer-motion";

const AboutSection = () => {
  const reasons = [
    {
      title: "Personal Service",
      description:
        "With us, you’re not just a number; you’re a valued customer. We take the time to understand your ideas and requirements, creating a website that perfectly fits your needs.",
    },
    {
      title: "Creative Solutions",
      description:
        "Our experienced team of designers and developers brings your ideas to life with appealing and functional websites. We offer customized web design that showcases your brand and message optimally.",
    },
    {
      title: "Technical Expertise",
      description:
        "With our extensive experience in web development and the latest technologies, we ensure your website not only looks great but is also performant and user-friendly.",
    },
    {
      title: "Reliability",
      description:
        "We deliver what we promise. Timely delivery and transparent communication are fundamental to us, ensuring you are always informed about your project's status.",
    },
    {
      title: "Sustainable Partnership",
      description:
        "We aim for long-term relationships with our clients and continue to support you with technical assistance and additional services even after your website is completed.",
    },
  ];

  return (
    <div className=" py-20 group bg-neutral-100">
      {" "}
      <div className="grid app-layout py-20 content-center	 min-[1100px]:grid-cols-2">
        <div className="">
          {" "}
          <Lottie
            loop
            animationData={animation}
            className="group-hover:scale-[1.2] duration-300 min-[1100px]:w-[60%]"
          />
        </div>
        <div className="max-w-[600px]">
          <p className="text-blue-700 font-[800]">Our Claim</p>

          <h4 className="py-5 font-[800] max-w-[500px]">
            At WAA Tech Ltd, we value personalized service and tailor-made
            solutions for your online project.{" "}
          </h4>
          <p className="">
            As a family-owned business, we are close to our clients and
            understand your needs and goals—whether you require a corporate
            website, blog, online shop, or landing page.
          </p>
          <div className="flex gap-10 mt-10">
            <div className=" py-5 flex gap-3 items-center ">
              <BsFileArrowUpFill size={40} className="text-blue-600" />
              <div>
                {" "}
                <p className="font-bold text-black">Personal Advice </p>
                <p>Tailored to Your Needs</p>
              </div>
            </div>
            <div className=" py-5 flex gap-3 items-center ">
              <BsFileArrowUpFill size={40} className="text-blue-600" />
              <div>
                {" "}
                <p className="font-bold text-black">
                  Customer-Centric Approach{" "}
                </p>
                <p>Your Satisfaction is Our Priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" py-8 app-layout">
          <h3 className=" font-bold mb-8">Why Choose WAA Tech Ltd?</h3>
          <div className="grid min-[1100px]:grid-cols-3 gap-7">
            {reasons.map((reason, index) => (
              <motion.div
                initial={{ opacity: 0 , y:50 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{
                  duration: 0.3,
                  delay: index / 8,
                }}
                key={index}
                className=" p-8 bg-white hover:shadow-xl duration-300 shadow rounded-md"
              >
                <h4 className="mb-5 font-semibold">{reason.title}</h4>
                <p className="">{reason.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <p className="">
              Let's elevate your online presence together. Contact us today to
              learn more about our website creation services and to schedule a
              no-obligation consultation.
            </p>
            <p className="mt-4 font-semibold">
              WAA Tech Ltd, your family business you can trust!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
