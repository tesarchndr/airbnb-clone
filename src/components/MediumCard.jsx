import Image from "next/image";
import React from "react";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 easy-out" >
      <div className="relative h-80 w-80">
        <Image src={img} layout='fill' className="rounded-xl"/>
      </div>
      <p className="text-xl font-semibold mt-3">{title}</p>
    </div>
  );
};

export default MediumCard;
