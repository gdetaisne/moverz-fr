type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}


