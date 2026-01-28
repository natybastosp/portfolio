import React, { useEffect, useRef, useState } from "react";
import { animate, createScope } from "animejs";
import folderIcon from "../assets/folder.svg";
import "../App.css";

const Projetos = () => {
  const root = useRef(null);
  const scope = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Floriography",
      emoji: "🌸",
      description:
        "Uma aplicação sobre a linguagem secreta das flores. Cada flor conta uma história especial! �🌷",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS"],
      github:
        "https://github.com/natybastosp/Portifolio-projects/tree/main/Floriography",
      status: "Pronto",
    },
    {
      id: 2,
      name: "Autofoto",
      description:
        "Uma cabine fotográfica vintage com filtros e molduras super fofas. Perfeito para criar memórias especiais!",
      technologies: ["React", "TypeScript", "Vite", "React Router"],
      github:
        "https://github.com/natybastosp/Portifolio-projects/tree/main/Autofoto",
      status: "Pronto",
    },
    {
      id: 3,
      name: "Minesweeper",
      emoji: "💣",
      description:
        "O clássico jogo de campo minado reimaginado! Duas versões diferentes para testar tecnologias. 💣�",
      technologies: ["React", "TypeScript", "Phaser 3", "Vite"],
      github:
        "https://github.com/natybastosp/Portifolio-projects/tree/main/campo-minado",
      status: "Pronto",
    },
    {
      id: 4,
      name: "SOL",
      emoji: "🎵",
      description:
        "Sistema inteligente de recomendação musical para saúde mental! Combina IA, lógica fuzzy e musicoterapia para bem-estar emocional. �✨",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Fuzzy Logic",
      ],
      github: "https://github.com/natybastosp/sistema_SOl",
      status: "Pronto",
    },
    {
      id: 5,
      name: "BookSheelf",
      emoji: "📚",
      description:
        "Aplicativo de gerenciamento e compartilhamento de biblioteca pessoal. Organize seus livros e compartilhe suas leituras! 📚💕",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/natybastosp/Portifolio-projects",
      status: "Pronto",
    },
    {
      id: 6,
      name: "CoffeeShop",
      emoji: "☕",
      description:
        "Plataforma e-commerce para venda de café especial. Descubra sabores únicos e premium!",
      technologies: ["React", "Stripe API", "Tailwind CSS"],
      github: "https://github.com/natybastosp/Portifolio-projects",
      status: "Pronto",
    },
  ];

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      // Fade-in do título
      animate("h1", {
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInOutQuad",
      });

      // Fade-in das pastas
      animate(".projeto-folder", {
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 800,
        delay: (el, i) => i * 100,
        easing: "easeOutQuad",
      });
    });

    return () => scope.current?.revert();
  }, []);

  return (
    <div
      ref={root}
      className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-8 py-20 static"
    >
      <div className="text-center max-w-4xl mx-auto mb-10  ">
        <h1 className="text-5xl md:text-7xl font-secondary text-black mb-4 opacity-0">
          My projects
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => {
          // Primeira fileira (0-2) tem fundo azul, segunda fileira (3-5) tem fundo verde
          const isBlueBackground = index < 3;
          const textColor = isBlueBackground ? "#4A4A4A" : "#FFE5EC";

          return (
            <div
              key={project.id}
              className="projeto-folder flex flex-col items-center justify-center opacity-0 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative mb-4 ">
                <img
                  src={folderIcon}
                  alt={project.name}
                  className="w-28 h-24 md:w-32 md:h-28 object-contain"
                />
              </div>
              <p
                className="text-center font-medium text-sm md:text-base transition-colors duration-300"
                style={{ color: textColor }}
              >
                {project.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-backdrop-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full p-8 shadow-2xl relative animate-modal-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-2xl close-button p-1"
            >
              ✕
            </button>

            {/* Header com ícone */}
            <div className="flex items-start gap-6 mb-6 animate-slide-in-left">
              <img
                src={folderIcon}
                alt={selectedProject.name}
                className="w-20 h-20 object-contain shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-secondary text-black mb-2">
                  {selectedProject.name}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6 animate-slide-in-right">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                TECHNOLOGIES:
              </h3>
              <div className="flex gap-2 flex-wrap">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-400 text-black px-4 py-2 rounded-full text-sm font-medium animate-tech-tag"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            {selectedProject.status && (
              <div
                className="mt-4 animate-slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    selectedProject.status === "Pronto"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {selectedProject.status === "Pronto" ? "✨" : "💕"}{" "}
                  {selectedProject.status}
                </span>
              </div>
            )}

            {/* Links */}
            <div className="mt-8 flex gap-4">
              {selectedProject.live && (
                <button
                  onClick={() => window.open(selectedProject.live, "_blank")}
                  className="flex-1 bg-purple-400 text-black px-4 py-2 rounded-lg font-medium modal-button-primary animate-button-slide-up"
                >
                  Live Demo
                </button>
              )}
              <button
                className="flex-1 border-2 border-purple-400 text-purple-400 px-4 py-2 rounded-lg font-medium modal-button-secondary animate-button-slide-up"
                onClick={() => window.open(selectedProject.github, "_blank")}
                style={{ animationDelay: "0.4s" }}
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projetos;
