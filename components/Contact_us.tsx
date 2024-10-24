"use client";
import { motion } from "framer-motion";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

interface FormData {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  comments: string;
}

const Contact_us: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    comments: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, subject, email, comments } = formData;
    const mailtoLink = `mailto:contact@waa-tech-ltd.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nComments: ${comments}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className=" min-[1100px]:w-full app-layout">
      <div className="md:flex min-[1100px]:flex-row flex flex-col space-y-3 min-[1100px]:h-full min-[1100px]:w-full min-[1100px]:py-9 min-[1100px]:px-20 p-4 py-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex flex-col w-full min-[1100px]:w-1/2 min-[1100px]:p-14 min-[1100px]:space-y-6"
        >
          <h3>Let’s Start a Conversation</h3>
          <div className="text-black space-y-3">
            <h4>Ask how we can help you:</h4>
            <div className="flex flex-col ">
              <p className="font-semibold">See our platform in action</p>
              <p className="">
                Request a personalized demo of Waa partner marketing platform.
              </p>
            </div>
            <div className="flex flex-col ">
              <p className="font-semibold">Master performance marketing</p>
              <p className="">
                From Waa Tech get best of the best services from us.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Get in Touch</p>
              <p>
                Have any questions or need further information? Contact our
                support team and we’ll be happy to assist you.
              </p>
            </div>

            <div className=" flex gap-10 py-10  ">
              <div>
                {" "}
                <h3 className=" font-[400] "> Contact</h3>
                <div className=" group mt-3 small">
                  <div className="flex gap-2 items-center duration-300 group-hover:translate-x-[10px]">
                    {" "}
                    <MdOutlineMail />
                    <p className="py-2 text-text  ">Email </p>
                  </div>
                  <p>contact@waa-tech-ltd.com</p>
                </div>
                <div className=" group mt-3 small">
                  <div className="flex gap-2 items-center duration-300 group-hover:translate-x-[10px]">
                    {" "}
                    <FaPhone />
                    <p className="py-2 text-text  ">Phone Number </p>
                  </div>

                  <p>+49 1523 1401084</p>
                </div>
              </div>
              <div>
                {" "}
                <h3 className=" font-[400] "> Headquater</h3>
                <div className="  mt-3 small flex gap-5">
                  <div>
                    <p className="">Waa Tech Ltd</p>
                    <p className="mt-2">Nile Street 64, London, UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex-1 w-full flex flex-col space-y-3 min-[1100px]:p-20"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full min-[1100px]:w-[500px] flex flex-col space-y-4"
          >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700"
              >
                Comments
              </label>
              <textarea
                id="comments"
                value={formData.comments}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-neutral-800 hover:bg-black rounded-lg border-2"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact_us;
