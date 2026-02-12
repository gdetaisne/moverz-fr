import { Star } from "lucide-react";
import { motion } from "framer-motion";

// TODO: Remplacer par l'URL réelle des avis Google de Moverz
const GOOGLE_REVIEWS_URL = "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review";

interface GoogleRatingProps {
  rating?: number;
  reviewCount?: number;
  className?: string;
  size?: "sm" | "md";
}

export function GoogleRating({
  rating = 4.5,
  reviewCount,
  className = "",
  size = "md",
}: GoogleRatingProps) {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <motion.a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 transition-all duration-200 group ${className}`}
      aria-label={`Note ${rating} sur 5 sur Google${reviewCount ? ` (${reviewCount} avis)` : ""}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-1 text-[rgb(var(--warning))]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${starSize} fill-current ${i < Math.floor(rating) ? "" : "opacity-30"}`}
          />
        ))}
      </div>
      <span className={`font-medium text-[rgb(var(--text))] ${textSize} group-hover:underline`}>
        {rating}+ sur Google
      </span>
      {reviewCount && (
        <span className={`text-[rgb(var(--muted))] ${textSize}`}>
          ({reviewCount.toLocaleString("fr-FR")} avis)
        </span>
      )}
    </motion.a>
  );
}
