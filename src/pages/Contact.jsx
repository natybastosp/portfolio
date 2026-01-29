import React, { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import "../App.css";

const Contato = () => {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      // Fade-in do título
      animate("h1", {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: "easeInOutQuad",
      });

      // Fade-in da descrição
      animate("p.subtitle", {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        delay: 100,
        easing: "easeInOutQuad",
      });

      // Fade-in dos cards de contato
      animate(".contact-card", {
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 800,
        delay: (el, i) => 200 + i * 100,
        easing: "easeOutQuad",
      });
    });

    return () => scope.current?.revert();
  }, []);

  const contatos = [
    {
      id: 1,
      icone: IconMail,
      titulo: "Email",
      valor: "natalia@example.com",
      link: "mailto:natalia@example.com",
    },
    {
      id: 2,
      icone: IconBrandLinkedin,
      titulo: "LinkedIn",
      valor: "@natybastos",
      link: "https://linkedin.com/in/natybastos",
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
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-secondary text-black mb-4 opacity-0">
          Vamos Conversar?
        </h1>
        <p className="subtitle text-lg md:text-xl text-gray-600 mb-8 opacity-0">
          Adoraria trocar uma ideia com você! Me contacte através de qualquer um
          dos canais abaixo ou envie uma mensagem. 💕
        </p>
      </div>

      {/* Cards de Contato */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {contatos.map((contato) => {
          const IconComponent = contato.icone;
          return (
            <a
              key={contato.id}
              href={contato.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col items-center justify-center gap-4 opacity-0">
                <IconComponent
                  size={64}
                  stroke={2}
                  className="text-purple-400"
                />
                <h3 className="font-semibold text-black text-center text-lg">
                  {contato.titulo}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {contato.valor}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contato;
