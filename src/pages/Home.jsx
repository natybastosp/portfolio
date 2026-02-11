import React, { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";
import coding from "../assets/Coding.jpeg";
import naty from "../assets/naty.jpeg";
import quote from "../assets/quote.jpeg";
import keyboard from "../assets/keyboard.jpeg";
import codeLine from "../assets/codeLine.png";

import Image from "../components/Image";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

const Home = () => {
  const root = useRef(null);
  const scope = useRef(null);
  const containerRef = useRef(null);

  // Usar hook de layout responsivo com GSAP
  useResponsiveLayout(containerRef);

  // Animações do Anime.js para o título e textos
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
      <div
        ref={containerRef}
        className="w-full h-full relative flex items-center justify-center"
      >
        <div className="text-black flex flex-col justify-center items-center max-w-4xl mx-auto">
          <h1 className="bg-[#FFB5C5] w-fit font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-0.5 px-2 text-center opacity-0">
            Dev-frontend
          </h1>
          <p className="nome-principal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-secondary text-center mt-4 opacity-0">
            Natália Pereira
          </p>
        </div>

        {/* Imagem Coding - responsiva com GSAP */}
        <Image
          src={coding}
          alt="coding"
          imageName="coding"
          size="w-40 sm:w-48 md:w-56 lg:w-64 h-44 sm:h-52 md:h-60 lg:h-72"
          imgPosition="object-bottom"
        />

        {/* Imagem da Natália - responsiva com GSAP */}
        <Image
          src={naty}
          alt="naty"
          imageName="naty"
          size="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32"
          imgPosition="object-center"
        />

        {/* Quote 1 - responsiva com GSAP */}
        <Image
          src={quote}
          alt="quote"
          imageName="quote1"
          size="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28"
          imgPosition="object-bottom"
        />

        {/* Quote 2 - responsiva com GSAP */}
        <Image
          src={quote}
          alt="quote"
          imageName="quote2"
          size="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28"
          imgPosition="object-bottom"
        />

        {/* Teclado - responsiva com GSAP */}
        <Image
          src={keyboard}
          alt="keyboard"
          imageName="keyboard"
          size="w-40 sm:w-48 md:w-56 lg:w-64 h-44 sm:h-52 md:h-60 lg:h-72"
          imgPosition="object-cover"
        />

        {/* Linha de Código - responsiva com GSAP */}
        <Image
          src={codeLine}
          alt="code line"
          imageName="codeLine"
          size="w-40 sm:w-48 md:w-56 lg:w-64 h-44 sm:h-52 md:h-60 lg:h-72"
          imgPosition="object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
