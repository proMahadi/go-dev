import Image from "next/image";
import React from "react";
import sparkle from "@/assets/sparkle.png"

const SectionHeading = ({ title }) => {
  return (
    <div className="w-fit relative">
      <h2 className="sectionHeading">
        {title}
      </h2>
      <div className="w-fit absolute  sectionHeading-position ">
        <Image src={sparkle} alt="sparkle" />
      </div>
    </div>
  );
};

export default SectionHeading;
