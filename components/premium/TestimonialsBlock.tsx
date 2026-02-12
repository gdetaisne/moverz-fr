import { Star, Quote } from "lucide-react";
import { Card } from "./Card";

const testimonials = [
  {
    id: "long",
    author: "Marie D.",
    location: "Paris → Lyon",
    rating: 5,
    text: "Moverz m'a fait gagner un temps fou. J'ai reçu 4 devis vraiment comparables, pas besoin de décrypter des lignes incompréhensibles. J'ai choisi en 10 minutes. Aucun démarchage, aucun stress. Exactement ce que je cherchais.",
    featured: true,
  },
  {
    id: "short-1",
    author: "Thomas L.",
    location: "Nice → Marseille",
    rating: 5,
    text: "Processus ultra clair, devis reçus rapidement. Les déménageurs étaient tous pros et vérifiés. Recommande à 100%.",
  },
  {
    id: "short-2",
    author: "Sarah M.",
    location: "Toulouse → Bordeaux",
    rating: 5,
    text: "Enfin un comparateur honnête ! Mon numéro est resté masqué, aucun harcèlement. Les prix étaient cohérents.",
  },
];

export function TestimonialsBlock() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Featured (long) */}
      <Card shadow className="p-8 lg:col-span-2">
        <Quote className="mb-4 h-8 w-8 text-[rgb(var(--accent))]/30" />
        <p className="mb-6 text-lg leading-relaxed text-[rgb(var(--text-2))]">
          {testimonials[0].text}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-[rgb(var(--text))]">
              {testimonials[0].author}
            </div>
            <div className="text-sm text-[rgb(var(--muted))]">
              {testimonials[0].location}
            </div>
          </div>
          <div className="flex gap-0.5 text-[rgb(var(--warning))]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      </Card>

      {/* Short testimonials */}
      {testimonials.slice(1).map((testimonial) => (
        <Card key={testimonial.id} shadow className="p-6">
          <div className="mb-3 flex gap-0.5 text-[rgb(var(--warning))]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <p className="mb-4 text-sm leading-relaxed text-[rgb(var(--text-2))]">
            {testimonial.text}
          </p>
          <div>
            <div className="font-semibold text-[rgb(var(--text))]">
              {testimonial.author}
            </div>
            <div className="text-xs text-[rgb(var(--muted))]">
              {testimonial.location}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
