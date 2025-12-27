import { ReactNode } from "react";

interface FilterPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: ReactNode;
}

export default function FilterPill({
  isActive = false,
  children,
  className = "",
  ...props
}: FilterPillProps) {
  return (
    <button
      className={`rounded-full px-3 py-2 text-xs font-normal leading-4 transition-colors ${
        isActive
          ? "bg-secondary text-primary"
          : "bg-secondary text-primary-muted hover:bg-secondary/50 hover:text-primary"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

