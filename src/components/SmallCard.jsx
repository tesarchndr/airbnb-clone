import Image from "next/image";
import React from "react";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-150 ease-out">
      <div className="relative h-16 w-16 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <p>{location}</p>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
};

export default SmallCard;
