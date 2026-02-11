import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import "../App.css";

const Contato = () => {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in do título
      gsap.fromTo(
        "h1",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
      );

      // Fade-in da descrição
      gsap.fromTo(
        "p.subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.1, ease: "power2.inOut" },
      );

      // Fade-in dos cards de contato com delay por índice
      gsap.utils.toArray(".contact-card").forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.2 + index * 0.1,
            ease: "power2.out",
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const contatos = [
    {
      id: 1,
      icone: IconMail,
      titulo: "Email",
      valor: "naty.bastosp@gmail.com",
      link: "mailto:naty.bastosp@gmail.com",
    },
    {
      id: 2,
      icone: IconBrandLinkedin,
      titulo: "LinkedIn",
      valor: "@natybastos",
      link: "www.linkedin.com/in/natybpereira",
    },
    {
      id: 3,
      icone: IconBrandGithub,
      titulo: "GitHub",
      valor: "@natybastosp",
      link: "https://github.com/natybastosp",
    },
  ];

  return (
    <div
      ref={root}
      className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-8 py-20"
    >
      <div className="text-center max-w-4xl mx-auto mb-5">
        <h1 className="text-5xl md:text-7xl font-secondary text-black mb-4 opacity-0">
          Let's Talk?
        </h1>
        <p className="subtitle text-lg md:text-xl text-gray-600 mb-8 opacity-0">
          I'd love to exchange ideas with you! Contact me through any of the
          channels below or send me a message. 💕
        </p>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 w-full max-w-4xl">
        {contatos.map((contato) => {
          const IconComponent = contato.icone;
          return (
            <button
              key={contato.id}
              onClick={() => window.open(contato.link, "_blank")}
              className="contact-card group "
            >
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl cursor-pointer h-full flex flex-col items-center justify-center gap-4">
                <IconComponent
                  size={64}
                  stroke={2}
                  className="text-[#FFB5C5]"
                />
                <h3 className="font-semibold text-black text-center text-lg">
                  {contato.titulo}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {contato.valor}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Contato;
