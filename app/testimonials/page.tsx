import ManagerComponent from "@/components/manager";
import MessageBanner from "@/components/messageBanner";
import ServiceSolutions from "@/components/service-solutions";
import TestimonialCard from "@/components/testimonials page/page";
import React from "react";

const TestimonailPage = () => {
  return (
    <div className="min-h-[100vh] pt-32">
      <p className="text-center">Tens of Five Star Ratings. Every Day.</p>
      <h1 className="text-center font-[800] py-14 ">
        The Reason Behind People&apos;s Choice...
      </h1>
      <div className="app-layout py-20">
        <TestimonialCard />
      </div>
     
      <ServiceSolutions
          title={"Our Web Technologies Services"}
          slides={[
            {
              image: "/web.jpg",
              title: "Custom Web Development",
              bg: "bg-blue-400",
              href: "/services/custom-web-development",
              description:
                "Create bespoke web solutions tailored to your business needs, from simple websites to complex web applications.",
            },
            {
              image: "/soft.jpg",
              title: "Custom Software Development",
              href: "/services/custom-web-development",

              bg: "bg-blue-400",
              description:
                "We provide custom software development, integration, and support, ensuring secure and scalable solutions tailored to your needs.",
            },
            {
              image: "/ui.jpg",
              title: "UX/UI Design",
              href: "/services/custom-web-development",

              bg: "bg-green-400",
              description:
                "Design user-centric interfaces and experiences that enhance usability and engagement, ensuring a seamless user journey.",
            },
            {
              image: "/seo.jpg",
              title: "SEO Optimization",
              bg: "bg-orange-400",
              href: "/services/custom-web-development",

              description:
                "Improve your website’s visibility on search engines with comprehensive SEO strategies that drive organic traffic and increase rankings.",
            },
            {
              image: "/ecommerce.jpg",
              href: "/services/custom-web-development",

              title: "E-commerce Solutions",
              bg: "bg-purple-400",
              description:
                "Develop and optimize e-commerce platforms that provide smooth shopping experiences, integrate payment gateways, and manage inventory efficiently.",
            },
            {
              image: "/maintain.jpg",
              title: "Web Maintenance",
              href: "/services/custom-web-development",

              bg: "bg-red-400",
              description:
                "Ensure your website runs smoothly with ongoing maintenance services that address bugs, update content, and enhance performance.",
            },
            {
              image: "/analytics.jpg",
              title: "Web Analytics",
              bg: "bg-teal-400",
              href: "/services/custom-web-development",

              description:
                "Leverage data insights to track user behavior, measure website performance, and make data-driven decisions for continuous improvement.",
            },
          ]}
        />

<ManagerComponent />
      <MessageBanner
        title="Transform your ideas into successful digital projects with us."
        btn="Let's Connect"
        link="/contactus"
      />
    </div>
  );
};

export default TestimonailPage;
