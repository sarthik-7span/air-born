import React from "react";
import Image from "next/image";

const InfoCard = ({ title, description, image, showSeparator }) => {
  return (
    <div className="flex gap-11">
      <div
        className={`relative w-28 h-28 ${
          showSeparator
            ? "before:absolute before:content-[''] before:w-[1px] before:bg-gray-300 before:top-0 before:-right-8 before:h-16"
            : ""
        }`}
      >
        <Image src={image} alt={title} />
      </div>
      <div>
        <h4 className="text-xl">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
