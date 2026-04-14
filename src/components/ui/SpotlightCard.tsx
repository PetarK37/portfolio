import { ReactNode, useRef, useCallback } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card rounded-2xl bg-surface ${className}`}
    >
      {children}
    </div>
  );
}

export default SpotlightCard;
