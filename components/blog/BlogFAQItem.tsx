"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  question: string;
  answer: string;
}

export function BlogFAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 ${
        open
          ? "border-v4-accent/40 bg-white shadow-sm"
          : "border-v4-border bg-[#FAFAFA] hover:bg-white hover:border-v4-accent/20"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm md:text-base font-semibold text-v4-text leading-snug">
          {question}
        </span>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 flex-shrink-0 text-v4-accent transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-[#4b5c6b] leading-relaxed border-t border-v4-border/50 pt-3">
          {answer}
        </div>
      )}
    </div>
  );
}
