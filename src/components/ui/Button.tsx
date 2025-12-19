"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none touch-manipulation active:scale-95";

    const variants = {
      primary:
        "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 focus:ring-blue-600 shadow-[0_8px_16px_rgba(29,78,216,0.4),inset_0_-2px_8px_rgba(0,0,0,0.2),inset_0_2px_8px_rgba(255,255,255,0.1)] hover:shadow-[0_12px_24px_rgba(29,78,216,0.5),inset_0_-2px_8px_rgba(0,0,0,0.3),inset_0_2px_12px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 active:scale-95 active:shadow-[0_4px_8px_rgba(29,78,216,0.3),inset_0_2px_8px_rgba(0,0,0,0.3)] border-b-4 border-blue-900/50 active:border-b-2",
      secondary:
        "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500 active:bg-slate-900",
      outline:
        "border-2 border-blue-600 text-blue-700 hover:bg-blue-50 focus:ring-blue-600 active:bg-blue-100",
      ghost:
        "text-slate-600 hover:bg-slate-100 focus:ring-slate-500 active:bg-slate-200",
    };

    const sizes = {
      sm: "px-4 py-2.5 text-sm min-h-[44px]",
      md: "px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base min-h-[48px]",
      lg: "px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg min-h-[52px]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
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

