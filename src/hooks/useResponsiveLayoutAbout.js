import { useEffect } from "react";
import { gsap } from "gsap";

export const useResponsiveLayoutAbout = (containerRef) => {
  useEffect(() => {
    if (!containerRef?.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ===== CONFIGURAÇÕES DE POSICIONAMENTO PARA ABOUT =====
      const positions = {
        mobile: {
          // Mobile: imagem menor, centralizada com texto
          naty: {
            display: "block",
            right: "3vw",
            top: "20%",
            scale: 0.6,
          },
          cardSkills: {
            display: "block",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "5vh",
            width: "90%",
            maxWidth: "280px",
          },
        },

        tablet: {
          // Tablet: imagem no lado direito, um pouco maior
          naty: {
            display: "block",
            right: "5vw",
            top: "15%",
            scale: 0.8,
          },
          cardSkills: {
            display: "block",
            left: "2vw",
            bottom: "8vh",
            width: "auto",
            maxWidth: "none",
          },
        },

        desktop: {
          // Desktop: imagem no lado direito, tamanho completo com float
          naty: {
            display: "block",
            right: "30vw",
            top: "12%",
            scale: 1.2,
          },
          cardSkills: {
            display: "block",
            right: "15vw",
            bottom: "10vh",
            width: "288px",
            maxWidth: "auto",
          },
        },
      };

      // ===== APLICAR POSIÇÕES POR BREAKPOINT =====

      // Mobile (até 640px)
      mm.add("(max-width: 640px)", () => {
        applyPositions(positions.mobile);
      });

      // Tablet (641px até 1370px)
      mm.add("(min-width: 641px) and (max-width: 1370px)", () => {
        applyPositions(positions.tablet);
      });

      // Desktop (1371px em diante)
      mm.add("(min-width: 1371px)", () => {
        applyPositions(positions.desktop);
      });

      // ===== ANIMAÇÕES DE ENTRADA =====
      gsap.from(".image-floating", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.5,
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [containerRef]);

  /**
   * Função auxiliar para aplicar posições GSAP
   */
  function applyPositions(positionConfig) {
    // Aplicar posições da imagem
    Object.entries(positionConfig).forEach(([key, value]) => {
      if (key === "naty") {
        const element = document.querySelector(`.image-${key}`);
        if (element) {
          gsap.set(element, value);
        }
      }
    });

    // Aplicar posições do card de skills
    if (positionConfig.cardSkills) {
      const cardSkills = document.querySelector(".card-skills");
      if (cardSkills) {
        gsap.set(cardSkills, positionConfig.cardSkills);
      }
    }
  }
};
