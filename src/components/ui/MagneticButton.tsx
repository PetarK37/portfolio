import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  download?: boolean;
  className?: string;
}

const variantClasses = {
  primary:
    "bg-accent text-zinc-950 font-semibold shadow-diffuse hover:shadow-[0_0_24px_rgba(16,185,129,0.4)] hover:brightness-110 active:scale-[0.97] transition-all duration-300",
  secondary:
    "border border-border font-semibold hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] active:scale-[0.97] transition-all duration-300",
  ghost:
    "text-text-secondary hover:text-accent active:scale-[0.97] transition-all duration-300",
};

function MagneticButton({
  children,
  variant = "primary",
  href,
  onClick,
  download,
  className = "",
}: MagneticButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm ease-out-expo cursor-pointer ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download || undefined}
        target={!download ? "_blank" : undefined}
        rel={!download ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}

export default MagneticButton;
