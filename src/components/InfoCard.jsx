import React from "react";
import Image from "next/image";

const InfoCard = ({ title, description, image, showSeparator }) => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-6 md:gap-11">
      <div
        className={`relative w-16 h-16 basis-16 shrink-0 grow-0 ${showSeparator
          ? "md:before:absolute md:before:content-[''] before:w-[1px] before:bg-gray-300 before:top-0 before:-right-3 md:before:-right-7 before:h-16"
          : ""
          }`}
      >
        <Image loading="lazy" src={image} alt={title} className="w-full h-full" />
      </div>
      <div className="text-center md:text-left">
        <h4 className="text-xl">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
