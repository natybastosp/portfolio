import React, { useEffect, useRef, useState } from "react";
import { animate, createScope } from "animejs";
import { IconBrandGithub } from "@tabler/icons-react";
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
      description:
        "Uma aplicação sobre a linguagem secreta das flores. Cada flor conta uma história especial!",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      github:
        "https://github.com/natybastosp/Portifolio-projects/tree/main/Floriography",
      keyFeatures: [
        "Beautiful flower encyclopedia",
        "Interactive flower meanings",
        "Floral arrangement suggestions",
        "Share flower stories",
        "Responsive design",
        "Fast performance",
      ],
    },
    {
      id: 2,
      name: "Autofoto",
      description:
        "Uma cabine fotográfica vintage com filtros e molduras super fofas. Perfeito para criar memórias especiais!",
      technologies: ["React", "TypeScript", "Vite", "React Router"],
      github:
        "https://github.com/natybastosp/Portifolio-projects/tree/main/Autofoto",
      keyFeatures: [
        "Vintage photo booth simulator",
        "Multiple filter options",
        "Fun frame designs",
        "Photo download feature",
        "Real-time preview",
        "Mobile friendly",
      ],
    },
    {
      id: 3,
      name: "Minesweeper",
      description:
        "O clássico jogo de campo minado reimaginado! Duas versões diferentes para testar tecnologias.",
      technologies: ["React", "TypeScript", "Phaser 3", "Vite"],
      github:
        "https://github.com/natybastosp/Portifolio-projects/tree/main/campo-minado",
      keyFeatures: [
        "Classic minesweeper gameplay",
        "Multiple difficulty levels",
        "Smooth animations",
        "Score tracking",
        "Keyboard controls",
        "Responsive design",
      ],
    },
    {
      id: 4,
      name: "SOL",
      description:
        "An intelligent music recommendation system that combines AI, Fuzzy Logic, and Music Therapy to promote mental well-being through personalized emotional playlists. Developed as final thesis (TCC) combining music therapy research with AI technology to create an innovative mental health tool.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Fuzzy Logic",
        "Spotify API",
      ],
      github: "https://github.com/natybastosp/sistema_SOl",
      keyFeatures: [
        "Fuzzy Logic AI recommendation engine",
        "2,184+ emotionally classified songs",
        "Spotify API integration",
        "JWT authentication system",
        "Personalized emotional analysis",
        "Real-time playlist generation",
      ],
    },
    {
      id: 5,
      name: "BookSheelf",
      description:
        "Aplicativo de gerenciamento e compartilhamento de biblioteca pessoal. Organize seus livros e compartilhe suas leituras!",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/natybastosp/Portifolio-projects",
      keyFeatures: [
        "Organize your book collection",
        "Add custom ratings and reviews",
        "Share reading lists with friends",
        "Track reading progress",
        "Book recommendations",
        "Cloud sync",
      ],
    },
    {
      id: 6,
      name: "CoffeeShop",
      description:
        "Plataforma e-commerce para venda de café especial. Descubra sabores únicos e premium!",
      technologies: ["React", "Stripe API", "Tailwind CSS"],
      github: "https://github.com/natybastosp/Portifolio-projects",
      keyFeatures: [
        "Premium coffee selection",
        "Secure payment with Stripe",
        "Order tracking",
        "Customer reviews",
        "Subscription options",
        "Fast shipping",
      ],
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
      <div className="text-center max-w-4xl mx-auto mb-10">
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
              <div className="relative mb-4">
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
            className="bg-[#FFFAFA] rounded-lg max-w-4xl w-full p-0 shadow-2xl animate-modal-slide-up overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-white flex items-center justify-between px-6 ">
              <h2 className="text-3xl font-secondary text-black mt-2 grow">
                {selectedProject.name}
              </h2>
              <button
                className=" text-gray-500 hover:text-purple-500 transition-colors"
                onClick={() => window.open(selectedProject.github, "_blank")}
                style={{ animationDelay: "0.4s" }}
              >
                <IconBrandGithub size={20} className="github-button-icon" />
              </button>
              <button
                onClick={() => setSelectedProject(null)}
                className=" text-gray-500 hover:text-gray-700 text-2xl close-button p-1 z-10"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
              {/* Left side - Image placeholder */}
              <div className="bg-linear-to-br  min-h-96 lg:min-h-full flex items-center justify-center ">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                  {/* Imagem será adicionada aqui */}
                  <span className="text-center">Imagem do projeto</span>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="  flex flex-col gap-3 justify-between">
                {/* Header */}
                <div className="animate-slide-in-left">
                  <p className="text-base leading-relaxed text-justify ">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className=" animate-slide-in-right">
                  <h3 className="text-sm font-semibold  mb-3  uppercase tracking-wide">
                    Tecnologias:
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className=" text-black   text-sm font-medium animate-tech-tag"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        {tech}
                        {index < selectedProject.technologies.length - 1 &&
                          " |"}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {selectedProject.keyFeatures && (
                  <div
                    className="animate-slide-in-right"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <h3 className="text-sm font-semibold  mb-3 uppercase tracking-wide">
                      Key Features:
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3  text-sm animate-tech-tag"
                          style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                        >
                          <span className="text-purple-400 font-bold mt-1">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projetos;
