"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const ManagerComponent = () => {
  return (
    <div className="py-40 bg-neutral-100">
      {" "}
      <div className="app-layout overflow-hidden flex flex-col min-[1100px]:flex-row gap-10 justify-between">
        <div className="m-auto">
          <Image
            src="/boksiii.jpeg"
            alt="Project Manager"
            height={800}
            width={1200}
            className="w-[300px] rounded-xl"
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="w-[70%] m-auto "
        >
          <h3>Marketing Manager</h3>
          <p className="tagline">Hannah Maria Zeller</p>
          <p>
            Hannah Maria Zeller, as the Marketing Manager, exemplifies
            creativity and strategic prowess, driving the company&apos;s brand
            forward with innovative campaigns. With a deep commitment to
            excellence, she ensures the marketing strategies align with the
            company&apos;s vision and values. Hannah&apos;s dedication to
            building strong customer relationships and her ability to lead and
            inspire her team are pivotal to the company&apos;s ongoing success.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ManagerComponent;
