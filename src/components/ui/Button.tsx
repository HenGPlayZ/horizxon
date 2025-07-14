import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "default", children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          // Variant styles following design.json
          {
            // Primary button: white background, black text (design.json: buttons.primary)
            "bg-white text-black hover:bg-[#F0F0F0] active:bg-[#E0E0E0] border-none":
              variant === "primary",
            // Secondary button: purple background, light text (design.json: buttons.secondary)
            "bg-[#40324F] text-[#E9E9E9] hover:bg-[#524166] border-none":
              variant === "secondary",
          },
          // Size styles
          {
            "h-10 px-4 py-2 text-sm": size === "sm",
            "h-11 px-6 py-2.5 text-base": size === "default",
            "h-12 px-8 py-3 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
