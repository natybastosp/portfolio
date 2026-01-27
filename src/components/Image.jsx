import React from "react";

const Image = ({
  src,
  alt,
  position,
  size,
  imgPosition = "left-1/12 top-1/3",
}) => {
  return (
    <div className={`absolute ${position} -translate-y-1/2`}>
      <div className="h-8 rounded-t-2xl bg-white"></div>
      <img
        src={src}
        alt={alt}
        className={` ${size} object-cover ${imgPosition} rounded-b-2xl`}
      />
    </div>
  );
};
export default Image;
