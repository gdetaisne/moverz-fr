"use client";
import { buildTunnelUrl } from "@/lib/tunnel-url";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { FieldError } from "./FieldError";
import { tunnelEntrySchema, TunnelEntryData } from "@/lib/schemas/tunnel";
import { z } from "zod";

interface TunnelEntryFormProps {
  onDataChange?: (data: Partial<TunnelEntryData>) => void;
  compact?: boolean;
}

export function TunnelEntryForm({ onDataChange, compact = false }: TunnelEntryFormProps) {
  const router = useRouter();
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [areaM2, setAreaM2] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = () => {
    // Mise à jour live pour ComparisonPreview
    if (onDataChange) {
      onDataChange({
        fromCity: fromCity || undefined,
        toCity: toCity || undefined,
        areaM2: areaM2 ? parseFloat(areaM2) : undefined,
      });
    }
  };

  const handleFromCityChange = (value: string) => {
    setFromCity(value);
    setErrors((prev) => ({ ...prev, fromCity: "" }));
    setTimeout(handleChange, 0);
  };

  const handleToCityChange = (value: string) => {
    setToCity(value);
    setErrors((prev) => ({ ...prev, toCity: "" }));
    setTimeout(handleChange, 0);
  };

  const handleAreaChange = (value: string) => {
    setAreaM2(value);
    setErrors((prev) => ({ ...prev, areaM2: "" }));
    setTimeout(handleChange, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const data = tunnelEntrySchema.parse({
        fromCity,
        toCity,
        areaM2: parseFloat(areaM2),
      });

      setIsSubmitting(true);

      // TODO: Rediriger vers l'entrée du tunnel existante
      // Pour l'instant, on redirige vers le formulaire de devis
      // Adapter cette URL selon votre architecture de tunnel
      const params = new URLSearchParams({
        step: "3",
        from: "https://moverz.fr/premium",
        originCity: data.fromCity,
        destinationCity: data.toCity,
        surfaceM2: data.areaM2.toString(),
        source: "premium-form",
      });
      
      router.push(buildTunnelUrl({ from: "premium-form", extra: Object.fromEntries(params) }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      setIsSubmitting(false);
    }
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Label htmlFor="fromCity-compact" className="sr-only">
            Ville de départ
          </Label>
          <Input
            id="fromCity-compact"
            type="text"
            placeholder="Ville de départ"
            value={fromCity}
            onChange={(e) => handleFromCityChange(e.target.value)}
            error={!!errors.fromCity}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="toCity-compact" className="sr-only">
            Ville d'arrivée
          </Label>
          <Input
            id="toCity-compact"
            type="text"
            placeholder="Ville d'arrivée"
            value={toCity}
            onChange={(e) => handleToCityChange(e.target.value)}
            error={!!errors.toCity}
          />
        </div>
        <div className="w-full sm:w-32">
          <Label htmlFor="areaM2-compact" className="sr-only">
            Surface (m²)
          </Label>
          <Input
            id="areaM2-compact"
            type="number"
            placeholder="Surface m²"
            value={areaM2}
            onChange={(e) => handleAreaChange(e.target.value)}
            error={!!errors.areaM2}
            min="10"
            max="500"
          />
        </div>
        <Button type="submit" size="lg" loading={isSubmitting} className="sm:shrink-0">
          Obtenir mes devis
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fromCity">Ville de départ</Label>
          <Input
            id="fromCity"
            type="text"
            placeholder="Ex: Paris"
            value={fromCity}
            onChange={(e) => handleFromCityChange(e.target.value)}
            error={!!errors.fromCity}
            autoComplete="off"
          />
          <FieldError>{errors.fromCity}</FieldError>
        </div>
        <div>
          <Label htmlFor="toCity">Ville d'arrivée</Label>
          <Input
            id="toCity"
            type="text"
            placeholder="Ex: Lyon"
            value={toCity}
            onChange={(e) => handleToCityChange(e.target.value)}
            error={!!errors.toCity}
            autoComplete="off"
          />
          <FieldError>{errors.toCity}</FieldError>
        </div>
      </div>
      <div>
        <Label htmlFor="areaM2">Surface de votre logement (m²)</Label>
        <Input
          id="areaM2"
          type="number"
          placeholder="Ex: 70"
          value={areaM2}
          onChange={(e) => handleAreaChange(e.target.value)}
          error={!!errors.areaM2}
          min="10"
          max="500"
        />
        <FieldError>{errors.areaM2}</FieldError>
      </div>
      <Button type="submit" size="lg" loading={isSubmitting} className="w-full sm:w-auto">
        Obtenir mes devis
      </Button>
    </form>
  );
}
