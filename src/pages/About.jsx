import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import naty from "../assets/naty.jpeg";

import Image from "../components/Image";
import { useResponsiveLayoutAbout } from "../hooks/useResponsiveLayoutAbout";

const Sobre = () => {
  const root = useRef(null);
  const containerRef = useRef(null);

  // Usar hook de layout responsivo com GSAP
  useResponsiveLayoutAbout(containerRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in do texto de apresentação
      gsap.fromTo(
        ".texto-apresentacao",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.inOut" },
      );

      // Animação da barra vertical - cresce de cima para baixo
      gsap.fromTo(
        ".barra-vertical",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.inOut",
        },
      );

      // Bolinha aparece com efeito pop
      gsap.fromTo(
        ".bolinha-tech",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.9,
          ease: "back.out",
        },
      );

      // Fade-in e slide da imagem (já será animada pelo hook)
      // Apenas adicionamos o float sutil

      // Float sutil na imagem de Natalia
      gsap.to(".image-naty", {
        y: 3,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // Fade-in do card de skills
      gsap.fromTo(
        ".card-skills",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.4,
          ease: "power2.inOut",
        },
      );

      // Pulse sutil no card de skills
      gsap.to(".card-skills", {
        boxShadow: "0 15px 40px rgba(227, 174, 8, 0.25)",
        duration: 3,
        delay: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // Hover nos items da lista
      const listItems = document.querySelectorAll(".skill-item");
      listItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            color: "#E3AE08",
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            color: "rgb(0, 0, 0)",
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Animação de entrada do título "Todas Notas"
      gsap.fromTo(
        ".titulo-notas",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.5, ease: "power2.out" },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="flex items-center justify-center min-h-screen w-full px-4 static overflow-hidden"
    >
      <div
        ref={containerRef}
        className="w-full h-full relative flex items-center justify-center"
      >
        <div className="texto-apresentacao absolute left-7 top-1/3 text-black flex flex-col justify-center items-center opacity-0">
          <p className="text-2xl text-justify leading-relaxed w-3xl ">
            Hey! I'm Natália, a front-end developer turning design visions into
            pixel-perfect realities. I'm passionate about creating intuitive
            interfaces where clean code meets thoughtful user experience. Every
            project is an opportunity to build something that users don't just
            see, but truly enjoy using.
          </p>
        </div>

        {/* Imagem da Natália - responsiva com GSAP */}
        <Image
          src={naty}
          alt="naty"
          imageName="naty"
          size="w-86 h-92"
          imgPosition="object-center"
        />

        <div className="card-skills bg-[#F9F5F0] h-96 rounded-lg shadow-lg z-50 absolute p-2 opacity-0">
          <span className="flex items-center justify-between">
            <h1 className="titulo-notas text-md text-[#E3AE08] mb-3 opacity-0">
              Todas Notas
            </h1>
            <h1 className="text-md text-[#E3AE08] mb-3">OK</h1>
          </span>
          <div className="mx-3 flex flex-col gap-3 ">
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
    </div>
  );
};

export default Sobre;
