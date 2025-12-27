import { ReactNode } from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: ReactNode;
}

export default function IconButton({
  isActive = false,
  children,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`flex items-center justify-center p-1.5 rounded-md transition-colors ${
        isActive 
          ? "bg-secondary text-primary" 
          : "text-primary-muted hover:bg-secondary/50 hover:text-primary"
      } ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

