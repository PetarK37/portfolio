import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

interface TextScrambleProps {
  text: string;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

function TextScramble({
  text,
  delay = 200,
  className = "",
  as: Tag = "span",
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    const chars = text.split("");
    let revealIndex = 0;
    let frame = 0;
    let cancelled = false;

    const scramble = () => {
      if (cancelled) return;

      const result = chars.map((char, i) => {
        if (char === " ") return " ";
        if (i < revealIndex) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      setDisplay(result.join(""));
      frame++;

      // Reveal one character every 3 frames
      if (frame % 3 === 0 && revealIndex < chars.length) {
        revealIndex++;
      }

      if (revealIndex <= chars.length) {
        rafRef.current = requestAnimationFrame(scramble);
      }
    };

    const timeout = setTimeout(() => {
      rafRef.current = requestAnimationFrame(scramble);
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, [text, delay]);

  return <Tag className={className}>{display}</Tag>;
}

export default TextScramble;
