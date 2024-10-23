import Link from "next/link";
import React from "react";

const MessageBanner = ({
  title,
  link,
  btn,
}: {
  title: string;
  link: string;
  btn: string;
}) => {
  return (
    <div className="">
      <div className=" text-center rouned-xl py-10 app-layout">
        <h1 className="c1 ">{title}</h1>
        <button className="my-8">
          <Link
            href={link}
            className="px-14 tagline py-3 bg-black text-white my-8 rounded-xl font-[600] hover:px-20 duration-300"
          >
            {btn}
          </Link>
        </button>{" "}
      </div>
    </div>
  );
};

export default MessageBanner;
