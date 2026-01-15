"use client";

import { useCallback, useState } from "react";

interface PhotoDropWidgetProps {
  redirectUrl?: string;
}

export default function PhotoDropWidget({
  redirectUrl = "https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=/home-photo-widget",
}: PhotoDropWidgetProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleFiles = useCallback((fileList: FileList | null) => {
    if (!fileList) return;
    const nextFiles = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/")
    );
    if (nextFiles.length === 0) return;
    setFiles(nextFiles.slice(0, 12)); // limite raisonnable
  }, []);

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
  };

  const handleContinue = () => {
    if (!files.length) return;

    // TODO: brancher ici la création de session / upload côté devis.moverz.fr
    // Pour l'instant, on redirige simplement avec une source claire.
    setIsRedirecting(true);
    if (typeof window !== "undefined") {
      window.location.href = redirectUrl;
    }
  };

  const hasFiles = files.length > 0;

  return (
    <div className="space-y-4">
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-4 py-6 md:px-6 md:py-8 text-center transition-all duration-300 cursor-pointer ${
          isDragging
            ? "border-[#6BCFCF] bg-[#E6FFFA]"
            : "border-[#E3E5E8] bg-white/90 hover:border-[#6BCFCF]/60 hover:bg-[#F8FEFE]"
        }`}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          onChange={onInputChange}
        />
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E6FFFA] text-[#6BCFCF]">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7a2 2 0 012-2h3l2-2h4l2 2h3a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v6m0 0-3-3m3 3 3-3"
            />
          </svg>
        </div>
               <p className="text-sm md:text-base font-semibold text-[#04163a]">
                 Glissez vos photos ici
               </p>
               <p className="mt-1 text-xs md:text-sm text-[#4b5c6b]">
                 Les photos = la clé : volume fiable, devis comparables, moins de surprises.
               </p>
        {hasFiles && (
          <p className="mt-3 text-xs md:text-sm font-medium text-[#6BCFCF]">
            {files.length} photo{files.length > 1 ? "s" : ""} ajoutée
            {files.length > 1 ? "s" : ""}.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleContinue}
        disabled={!hasFiles || isRedirecting}
        className={`group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-3 text-sm md:text-base font-semibold text-[#04141f] shadow-[0_6px_20px_rgba(107,207,207,0.35)] transition-all duration-300 ${
          hasFiles && !isRedirecting
            ? "bg-[#6BCFCF] hover:bg-[#5AB5B5] hover:scale-[1.02] active:scale-[0.98]"
            : "bg-[#E3E5E8] text-[#6B7280] cursor-not-allowed"
        }`}
        aria-disabled={!hasFiles || isRedirecting}
      >
        {hasFiles ? (
          <>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">
              {isRedirecting
                ? "Redirection en cours..."
                : "Continuer et comparer 3 devis minimum"}
            </span>
            <span className="relative text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </>
        ) : (
          <span className="relative">
            Ajoutez au moins une photo pour continuer
          </span>
        )}
      </button>

      <p className="text-[11px] md:text-xs text-[#4b5c6b] text-center">
        Gratuit • Sans spam • Les photos augmentent la précision
      </p>
    </div>
  );
}


