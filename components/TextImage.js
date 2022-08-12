import React from "react";
import Image from "next/image";

function TextImage(props) {
  return (
    <div className="md:flex font-sans lg:w-3/4 lg:shadow-2xl ">
      <div className=" w-2/3 md:w-1/3 m-auto ">
        <Image
          className=" object-contain"
          loading="lazy"
          src={props.image}
          alt=""
        />
      </div>
      <div className="md:flex w-full md:flex-wrap px-10 py-10 text-left md:px-8 bg-dark text-white">
        <h1 className="flex-auto text-2xl font-bold">{props.tittel} </h1>
        <p className="text-gray-500 text-md md:text-lg md:text-xl font-mono md:font-sans ">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default TextImage;
