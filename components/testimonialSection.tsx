"use client";
import Lottie from "lottie-react";
import React from "react";
import why from "../animations/why.json";
import Link from "next/link";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <div className="py-40 group bg-blue-500 ">
      <div className="grid md:grid-cols-2 overflow-hidden app-layout">
        <div>
          <Lottie
            animationData={why}
            className="w-[60%] py-10 group-hover:scale-[1.2] duration-300"
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className="text-zinc-200  "
        >
          <p className="tracking-[0.2em]	">TESTIMONIALS</p>
          <h3 className="font-[900] max-w-[500px] my-6 text-zinc-200">
            A strong customer connection is important to us.
          </h3>
          <p className="max-w-[500px]">
            Hear what our satisfied clients have to say about their experience
            with WAA Tech Ltd. Discover how our tailored solutions and dedicated
            service have helped them achieve their online goals.
          </p>

          <Link href={"/testimonials"}>
            {" "}
            <button className="bg-blue-600 text-zinc-200 rounded-xl px-8 py-3 my-8 shadow-xl hover:px-14 duration-300 ">
              Explore More{" "}
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;
