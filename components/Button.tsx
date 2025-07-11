"use client";

import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded font-semibold transition duration-300";

  const variants: Record<string, string> = {
    primary:
      "bg-primary text-white hover:bg-primary/80",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-600",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={classNames(baseStyles, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
