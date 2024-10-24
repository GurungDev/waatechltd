"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animation from "../../animations/profile.json";
import Link from "next/link";

const AboutUsLandingPage = () => {
  return (
    <div className=" py-20 min-h-[100dvh] ">
      {" "}
      <div className="flex flex-col min-[1100px]:flex-row items-center justify-between ">
        <div className="order-2 min-[1100px]:order-1 min-[1100px]:w-[60%] min-[1100px]:pl-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="app-layout "
          >
            <p className="tagline">About Us</p>
            <h1 className=""> Your Website in Good Hands </h1>
            <p className=" tagline min-[1100px]:w-[80%] py-5">
              <span className="font-bold text-black">
                Welcome to WAA Tech Ltd
              </span>{" "}
              , your family-owned business for{" "}
              <span className="font-bold text-black">
                {" "}
                professional website creation!{" "}
              </span>
            </p>
            <button className="my-8">
              <Link
                href={"/contactus"}
                className="px-14 tagline py-3 bg-black text-white my-8 rounded-xl font-[600] hover:px-20 duration-300"
              >
                Let&apos;s work Together
              </Link>
            </button>{" "}
          </motion.div>
        </div>
        <div className="w-[60%] overflow-hidden custom-border2 mt-10 min-[1100px]:w-[40%] min-[1900px]:w-[40%] order-1 min-[1100px]:order-2 landing-radius bg-blue-400">
          {" "}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=" p-9 "
          >
            <Lottie loop animationData={animation} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsLandingPage;
