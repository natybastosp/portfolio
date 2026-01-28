import React, { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";
import coding from "../assets/Coding.jpeg";
import naty from "../assets/naty.jpeg";
import quote from "../assets/quote.jpeg";

import Image from "../components/Image";

const Home = () => {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      // Fade-in do título
      animate("h1", {
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInOutQuad",
      });

      // Fade-in do nome com slight slide
      animate(".nome-principal", {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1200,
        delay: 300,
        easing: "easeInOutQuad",
      });

      // Float das imagens - movimento contínuo e sutil
      animate(".image-floating", {
        translateY: [
          { value: -5, duration: 3000 },
          { value: 5, duration: 3000 },
        ],
        loop: true,
        easing: "easeInOutQuad",
      });

      // Pulse do título rosa
      animate("h1", {
        opacity: [1, 0.7, 1],
        duration: 2500,
        delay: 1500,
        loop: true,
        easing: "easeInOutQuad",
      });
    });

    return () => scope.current?.revert();
  }, []);

  return (
    <div
      ref={root}
      className="flex items-center justify-center min-h-screen w-full px-4 md:px-8 static overflow-hidden"
    >
      <div className="text-black flex flex-col justify-center items-center max-w-4xl mx-auto">
        <h1 className="bg-[#FFB5C5] w-fit font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-0.5 px-2 text-center opacity-0">
          Dev-frontend
        </h1>
        <p className="nome-principal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-secondary text-center mt-4 opacity-0">
          Natalia Pereira
        </p>
      </div>

      <Image
        src={naty}
        alt="naty"
        position="hidden md:block left-1/5 z-50 bottom-45 image-floating"
        size="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32"
        imgPosition="object-center"
      />

      <Image
        src={coding}
        alt="coding"
        position="hidden lg:block left-1/12 top-1/3 image-floating"
        size="w-40 sm:w-48 md:w-56 lg:w-64 h-44 sm:h-52 md:h-60 lg:h-72"
        imgPosition="object-bottom"
      />

      <Image
        src={quote}
        alt="quote"
        position="hidden sm:block left-1/11 bottom-1/12 image-floating"
        size="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28"
        imgPosition="object-bottom"
      />

      <Image
        src={quote}
        alt="quote"
        position="hidden lg:block left-1/7 bottom-1 image-floating"
        size="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28"
        imgPosition="object-bottom"
      />
    </div>
  );
};

export default Home;
