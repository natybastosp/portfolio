import React, { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";

import naty from "../assets/naty.jpeg";

import Image from "../components/Image";

const Sobre = () => {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      // Fade-in do texto de apresentação
      animate(".texto-apresentacao", {
        opacity: [0, 1],
        translateX: [-30, 0],
        duration: 1000,
        easing: "easeInOutQuad",
      });

      // Animação da barra vertical - cresce de cima para baixo
      animate(".barra-vertical", {
        scaleY: [0, 1],
        transformOrigin: "top",
        duration: 800,
        delay: 200,
        easing: "easeInOutQuad",
      });

      // Bolinha aparece com efeito pop
      animate(".bolinha-tech", {
        opacity: [0, 1],
        scale: [0, 1],
        duration: 500,
        delay: 900,
        easing: "easeOutBack",
      });

      // Fade-in e slide da imagem
      animate(".imagem-naty-sobre", {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        delay: 300,
        easing: "easeInOutQuad",
      });

      // Float sutil na imagem de Natalia
      animate(".imagem-naty-sobre", {
        translateY: [
          { value: -3, duration: 3000 },
          { value: 3, duration: 3000 },
        ],
        loop: true,
        easing: "easeInOutQuad",
      });

      // Fade-in do card de skills
      animate(".card-skills", {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        delay: 400,
        easing: "easeInOutQuad",
      });

      // Pulse sutil no card de skills
      animate(".card-skills", {
        boxShadow: [
          "0 10px 30px rgba(227, 174, 8, 0.1)",
          "0 15px 40px rgba(227, 174, 8, 0.25)",
          "0 10px 30px rgba(227, 174, 8, 0.1)",
        ],
        duration: 3000,
        delay: 1500,
        loop: true,
        easing: "easeInOutQuad",
      });

      // Hover effect no card - levanta com sombra aumentada
      const cardElement = document.querySelector(".card-skills");
      if (cardElement) {
        cardElement.addEventListener("mouseenter", () => {
          animate(".card-skills", {
            translateY: -10,
            duration: 300,
            easing: "easeOutQuad",
          });
        });

        cardElement.addEventListener("mouseleave", () => {
          animate(".card-skills", {
            translateY: 0,
            duration: 300,
            easing: "easeOutQuad",
          });
        });
      }

      // Hover nos items da lista
      const listItems = document.querySelectorAll(".skill-item");
      listItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          animate(item, {
            color: "#E3AE08",
            translateX: 5,
            duration: 300,
            easing: "easeOutQuad",
          });
        });

        item.addEventListener("mouseleave", () => {
          animate(item, {
            color: "rgb(0, 0, 0)",
            translateX: 0,
            duration: 300,
            easing: "easeOutQuad",
          });
        });
      });

      // Animação de entrada do título "Todas Notas"
      animate(".titulo-notas", {
        opacity: [0, 1],
        delay: 500,
        duration: 800,
        easing: "easeOutQuad",
      });
    });

    return () => scope.current?.revert();
  }, []);

  return (
    <div
      ref={root}
      className="flex items-center justify-center min-h-screen w-full px-4 static"
    >
      <div className="texto-apresentacao absolute left-7 top-1/3 text-black flex flex-col justify-center items-center opacity-0">
        <p className="text-2xl text-justify leading-relaxed w-3xl ">
          Hey! I'm Natalia, a front-end developer turning design visions into
          pixel-perfect realities. I'm passionate about creating intuitive
          interfaces where clean code meets thoughtful user experience. Every
          project is an opportunity to build something that users don't just
          see, but truly enjoy using.
        </p>
      </div>

      <Image
        src={naty}
        alt="naty"
        position="imagem-naty-sobre right-2/8 bottom-10 opacity-0"
        size="w-86 h-92"
        imgPosition="object-center"
      />

      <div className="card-skills bg-[#F9F5F0] h-96 w-72 rounded-lg shadow-lg z-50 absolute right-1/9 bottom-10 p-2 opacity-0">
        <span className="flex items-center justify-between">
          <h1 className="titulo-notas text-md text-[#E3AE08] mb-3 opacity-0">
            Todas Notas
          </h1>
          <h1 className="text-md text-[#E3AE08] mb-3">OK</h1>
        </span>
        <div className="mx-3 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-0">
              <h2 className="text-xl font-semibold bg-[#F1D7A4]/70 px-1 pr-4">
                Tech Stack:
              </h2>
              <div className="flex flex-col items-center -ml-0.5">
                <div className="barra-vertical border-l-2 border-[#E3AE08] h-6"></div>
                <div className="bolinha-tech w-1 h-1 rounded-full bg-[#E3AE08] shrink-0"></div>
              </div>
            </div>
          </div>
          <ul className="cursor-default list-disc list-inside">
            <li className="skill-item">JavaScript (ES6+)</li>
            <li className="skill-item">HTML5 & CSS3</li>
            <li className="skill-item">Vue.js</li>
            <li className="skill-item">React</li>
            <li className="skill-item">Tailwind CSS</li>
            <li className="skill-item">Responsive Design</li>
            <li className="skill-item">Clean Architecture</li>
            <li className="skill-item">Exploring AI</li>
            <li className="skill-item">Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
