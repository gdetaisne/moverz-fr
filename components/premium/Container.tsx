import { ReactNode } from "react";
import { clsx } from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={clsx("mx-auto w-full max-w-[1200px] px-5 md:px-6", className)}>
      {children}
    </Component>
  );
}
