import { useEffect } from "react";
import { gsap } from "gsap";

export const useResponsiveLayout = (containerRef) => {
  useEffect(() => {
    if (!containerRef?.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ===== CONFIGURAÇÕES DE POSICIONAMENTO =====
      const positions = {
        mobile: {
          // Mobile: apenas a imagem de Natália
          naty: { display: "none" },
          coding: {
            display: "block",
            left: "2vw",
            top: "5%",
            scale: 1,
          },
          quote1: {
            display: "block",
            left: "3vw",
            bottom: "25vh",
            scale: 1,
          },
          quote2: {
            display: "none",
          },
          keyboard: {
            display: "block",
            right: "10vw",
            bottom: "10vh",
            scale: 0.7,
          },
          codeLine: {
            display: "block",
            right: "3vw",
            top: "5%",
            scale: 0.7,
          },
        },

        tablet: {
          // Tablet: ESQUERDA (naty, quote1) | DIREITA (coding)
          naty: { display: "none" },
          coding: {
            display: "block",
            left: "2vw",
            top: "5%",
            scale: 0.9,
          },
          quote1: {
            display: "block",
            left: "3vw",
            bottom: "25vh",
            scale: 0.8,
          },
          quote2: {
            display: "block",
            left: "8vw",
            bottom: "15vh",
            scale: 0.8,
          },
          keyboard: {
            display: "block",
            right: "10vw",
            bottom: "10vh",
            scale: 0.7,
          },
          codeLine: {
            display: "block",
            right: "3vw",
            top: "5%",
            scale: 0.7,
          },
        },

        desktop: {
          // Desktop: ESQUERDA (naty, quote1) | DIREITA (coding, keyboard, quote2)
          coding: {
            display: "block",
            left: "6vw",
            top: "15%",
            scale: 1.2,
          },
          naty: {
            display: "block",
            left: "17vw",
            top: "45%",
            scale: 1,
          },
          quote1: {
            display: "block",
            left: "5vw",
            bottom: "18vh",
            scale: 1,
          },
          quote2: {
            display: "block",
            left: "9vw",
            bottom: "11vh",
            scale: 1,
          },
          keyboard: {
            display: "block",
            right: "6vw",
            top: "15%",
            scale: 1,
          },
          codeLine: {
            display: "block",
            right: "10vw",
            bottom: "20vh",
            scale: 1,
          },
        },
      };

      // ===== APLICAR POSIÇÕES POR BREAKPOINT =====

      // Mobile (até 640px)
      mm.add("(max-width: 640px)", () => {
        applyPositions(positions.mobile);
      });

      // Tablet (641px até 1370px) - Breakpoint: 1370x850
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
    Object.entries(positionConfig).forEach(([key, value]) => {
      const element = document.querySelector(`.image-${key}`);
      if (element) {
        gsap.set(element, value);
      }
    });
  }
};
