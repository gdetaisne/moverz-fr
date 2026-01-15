import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <p className="text-sm font-semibold text-gray-500">Erreur 404</p>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A]">Page introuvable</h1>
        <p className="mt-3 text-gray-600">
          La page demandée n’existe pas (ou a été déplacée).
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}

