import { LabelHTMLAttributes } from "react";
import { clsx } from "clsx";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={clsx(
        "block text-sm font-medium text-[rgb(var(--text))] mb-2",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
