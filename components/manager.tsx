import Image from "next/image";
import React from "react";

const ManagerComponent = () => {
  return (
    <div className="py-40 bg-neutral-100">
      {" "}
      <div className="app-layout  flex flex-col min-[1100px]:flex-row gap-10 justify-between">
        <div className="m-auto">
          <Image
            src="/boksiii.jpeg"
            alt="Project Manager"
            height={800}
            width={1200}
            className="w-[300px] rounded-xl"
          />
        </div>
        <div className="w-[70%] m-auto">
          <h3>Marketing Manager</h3>
          <p className="tagline">Hannah Maria Zeller</p>
          <p>
            Hannah Maria Zeller, as the Marketing Manager, exemplifies
            creativity and strategic prowess, driving the company’s brand
            forward with innovative campaigns. With a deep commitment to
            excellence, she ensures the marketing strategies align with the
            company’s vision and values. Hannah's dedication to building strong
            customer relationships and her ability to lead and inspire her team
            are pivotal to the company’s ongoing success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagerComponent;
