import React from "react";

const Image = ({
  src,
  alt,
  imageName,
  size,
  imgPosition = "object-center",
}) => {
  return (
    <div className={`image-floating image-${imageName} absolute`}>
      <div className="h-8 rounded-t-2xl bg-white"></div>
      <img
        src={src}
        alt={alt}
        className={`${size} object-cover ${imgPosition} rounded-b-2xl`}
      />
    </div>
  );
};
export default Image;
