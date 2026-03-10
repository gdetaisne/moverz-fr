export function MoverzLogo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 140 32" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="24"
        fontFamily="Sora, system-ui, sans-serif"
        fontSize="26"
        fontWeight="800"
        fill="url(#gradient)"
      >
        Moverz
      </text>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0EA5A6" />
          <stop offset="100%" stopColor="#6BCFCF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
