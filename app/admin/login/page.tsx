"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MoverzLogo } from "@/components/admin/MoverzLogo";
import { LockIcon } from "@/components/admin/Icons";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Erreur de connexion");
      }
    } catch (err) {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `radial-gradient(900px 420px at 20% 12%, rgba(107, 207, 207, 0.26), transparent 60%),
                     radial-gradient(700px 380px at 80% 18%, rgba(168, 232, 232, 0.60), transparent 62%),
                     linear-gradient(180deg, #a8e8e8 0%, #eafafa 42%, #ffffff 100%)`
      }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-md w-full mx-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-glow-turquoise p-10 border border-white/50">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <MoverzLogo className="h-10 w-auto" />
            </div>
            <h1 className="font-heading text-3xl font-800 text-v4-text mb-2">
              Content Intelligence
            </h1>
            <p className="font-sans text-v4-text-secondary font-medium">
              Plateforme Admin Moverz
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="password" 
                className="block font-sans text-sm font-600 text-v4-text mb-3"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 font-sans bg-white border border-v4-border rounded-xl 
                         focus:ring-2 focus:ring-accent/40 focus:border-accent 
                         transition-all duration-300 outline-none
                         placeholder:text-v4-text-muted"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl font-sans text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-accent to-accent-light text-white py-3.5 rounded-xl 
                       font-sans font-600 shadow-glow-turquoise
                       hover:shadow-glow-turquoise-lg hover:-translate-y-0.5 
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                       transition-all duration-300"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="font-sans text-xs text-v4-text-muted flex items-center justify-center gap-2">
              <LockIcon className="w-3.5 h-3.5" />
              Accès sécurisé · NoIndex activé
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

