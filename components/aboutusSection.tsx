"use client";
import Lottie from "lottie-react";
import React from "react";
import why from "../animations/why.json";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <div className="bg-zinc-100 py-20">
      {" "}
      <div className="app-layout grid md:grid-cols-2 items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: .5,
            },
          }}
          viewport={{ once: true }}
          className=" "
        >
          <h2 className=" py-8 font-[700]">Why should you choose us?</h2>
          <p className="tagline">
            At WAA Tech Ltd, we place great value on personalized service and
            tailored solutions for your online project. As a family-owned
            business, we are close to our customers and understand your needs
            and goals—whether you need a corporate website, a blog, an online
            shop, or a landing page.
          </p>{" "}
          <button className="my-8">
            <Link
              href={"aboutus"}
              className="px-14 tagline py-3 bg-black text-white my-8 rounded-xl font-[600] hover:px-20 duration-300"
            >
              About Us
            </Link>
          </button>{" "}
        </motion.div>

        <div className="  flex items-end justify-end">
          <Lottie animationData={why} className="w-[60%] " />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
