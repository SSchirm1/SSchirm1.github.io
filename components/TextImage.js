import React from "react";
import Image from "next/image";

function TextImage(props) {
  return (
    <div className="flex font-sans  w-3/4 shadow-2xl">
      <div className="flex-none w-96 relative">
        <Image
          className="absolute   object-fill  "
          loading="lazy"
          src={props.image}
          alt=""
        />
      </div>
      <div className="flex flex-wrap px-5 py-10">
        <h1 className="flex-auto text-2xl font-bold">{props.tittel} </h1>
        <p className="text-gray-500">{props.text}</p>
      </div>
    </div>
  );
}

export default TextImage;
