import { useRef, useEffect, useCallback } from "react";

interface MagneticOptions {
  strength?: number;
}

export function useMagneticHover<T extends HTMLElement>(
  options: MagneticOptions = {}
) {
  const { strength = 0.15 } = options;
  const ref = useRef<T>(null);
  const frameRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transform = "translate(0px, 0px)";
    const timer = setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (prefersReduced || !hasHover) return;

    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}
