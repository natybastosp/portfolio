import React from "react";
import coding from "../assets/Coding.jpeg";
import naty from "../assets/naty.jpeg";
import quote from "../assets/quote.jpeg";

import Image from "../components/Image";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 static">
      <div className=" text-black flex flex-col justify-center items-center max-w-4xl mx-auto">
        <h1 className="bg-[#FFB5C5] w-fit font-primary text-4xl p-0.5 px-2">
          Dev-frontend
        </h1>
        <p className="text-6xl font-secondary">Natalia Pereira</p>
      </div>

      <Image
        src={naty}
        alt="naty"
        position="left-1/5 bottom-45"
        size="w-28 h-28"
        imgPosition="object-center"
      />

      <Image
        src={coding}
        alt="coding"
        position="left-1/12 top-1/3"
        size="w-58 h-60"
        imgPosition="object-bottom"
      />

      <Image
        src={quote}
        alt="quote"
        position="left-1/11 bottom-1"
        size="w-28 h-28"
        imgPosition="object-bottom"
      />
    </div>
  );
};

export default Home;
