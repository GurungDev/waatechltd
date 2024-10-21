"use client"
import Lottie from "lottie-react";
import React from "react";
import { BiSolidPackage } from "react-icons/bi";
import title from "../animations/title.json";

const WebPackagesComponent = () => {
  const slides = [
    {
      icon: <BiSolidPackage size={25} className="text-3xl text-green-400" />,
      label: "Basic",
      text_color: "text-green-400",
      bg_color: "bg-green-400",
      image: "/assets/img/sales.jpg",
      subpoints: [
        "Description: ",
        "A static website suitable for showcasing information.",
        "Features:",
        "- 3-5 pages or a single landing page.",
        "- Responsive design ensuring the website looks good on all devices.",
        "- Basic SEO optimization.",
      ],
    },
    {
      icon: <BiSolidPackage size={33} className="text-3xl text-blue-400" />,
      label: "Medium",
      text_color: "text-blue-400",
      bg_color: "bg-blue-400",
      image: "/assets/img/marketing.avif",
      subpoints: [
        "Description: ",
        "A static website suitable for showcasing information.",
        "Features:",
        "- 4-7 pages or a single landing page.",
        "- Responsive design.",
        "- Enhanced SEO optimization.",
        "- Visually appealing UI design with animations.",
      ],
    },
    {
      icon: <BiSolidPackage size={38} className="text-3xl text-red-500" />,
      label: "Large",
      text_color: "text-red-400",
      bg_color: "bg-red-400",
      image: "/assets/img/hope.jpg",
      subpoints: [
        "Description: ",
        "A dynamic website with basic CRUD functionality.",
        "Features:",
        "- 5-7 pages including a landing page.",
        "- Responsive design and enhanced SEO optimization.",
        "- Basic CRUD operations (Create, Read, Update, Delete).",
        "- Backend support with a simple database (e.g., MongoDb, MySQL).",
        "- User authentication and login functionality.",
        "- Basic admin panel to manage content.",
        "- Contact form with email notifications.",
      ],
    },
    {
      icon: <BiSolidPackage size={43} className="text-3xl text-green-900" />,
      label: "Complex",
      text_color: "text-green-800",
      bg_color: "bg-green-800",
      image: "/assets/img/network.webp",
      subpoints: [
        "Description: ",
        "A website with advanced functionalities.",
        "Features:",
        "- 8-10 pages, including a landing page.",
        "- Responsive fast-loading design and advanced CRUD operations.",
        "- User authentication and roles management.",
        "- Advanced admin panel with analytics, reporting and integration with third-party services.",
        "- Enhanced UI/UX design,Advanced SEO.",
        "- Contact forms with database storage and email notifications.",
        "- Performance optimization and security measures.",
      ],
    },
    {
      icon: <BiSolidPackage size={48} className="text-3xl text-black" />,
      label: "Premium",
      text_color: "text-black",
      bg_color: "bg-black",
      image: "/assets/img/teams.jpg",
      subpoints: [
        "Description: ",
        "A highly customized website with complex functionalities.",
        "Features:",
        "- More than 10 pages including a landing page.",
        "- Highly responsive and fast-loading design.",
        "- Advanced CRUD operations with relational and/or NoSQL databases.",
        "- Scalable backend support and custom functionalities (e.g., e-commerce.) ",
        "- Advanced user authentication & roles and admin panel with analytics, reporting.",
        "- Third-party service integration and high quality UI/UX.",
        "- SEO & performance optimization and advanced contact forms security & compliance.",
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="py-20 app-layout">
        {" "}
        <h3 className="font-[600]">Our Web Packages</h3>
        <p className="py-2 tagline max-w-[1000px]">
          We offer a variety of web packages tailored to meet different needs
          and budgets.
        </p>
      </div>

      <div>
        {slides?.map((slide, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col min-[1100px]:flex-row px-6 justify-center items-center space-x-2"
            >
              <div className="flex order-2 min-[1100px]:order-1 w-[60%] flex-col space-y-6 text-left p-8">
                
                <div className="">
                <h3 className="c4 font-[700] "> {slide?.label} Package</h3>
                  {slide.subpoints.map((subpoint, subIndex) => (
                    <div className="" key={subIndex}>
                      {subIndex == 0 || subIndex == 2 ? (
                        <h4
                          className={`${
                            subIndex == 0 || subIndex == 2
                              ? ` font-semibold ${slide.text_color}`
                              : `   mb-3`
                          } text-black`}
                        >
                          {subpoint}
                        </h4>
                      ) : (
                        <p className="text-black">{subpoint}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-2 order-1 min-[1100px]:order-2 py-4 md:w-[60%] min-[1100px]:w-[30%]">
                {/* <Lottie animationData={title} /> */}
               <h1 className="c2"> {slide?.label}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebPackagesComponent;
