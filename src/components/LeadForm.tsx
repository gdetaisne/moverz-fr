import React, { useRef, useState } from 'react';

export function LeadForm() {
  const [files, setFiles] = useState<File[]>([]);
  const dropRef = useRef<HTMLDivElement>(null);

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    const list = Array.from(e.dataTransfer.files || []);
    setFiles(prev => [...prev, ...list]);
    dropRef.current?.classList.remove('ring-2');
  }

  return (
    <form className="grid md:grid-cols-2 gap-4">
      <div className="fld"><input className="input" id="fromCity" name="fromCity" placeholder="Ville de départ" /><label className="label" htmlFor="fromCity">Ville de départ</label></div>
      <div className="fld"><input className="input" id="toCity" name="toCity" placeholder="Ville d’arrivée" /><label className="label" htmlFor="toCity">Ville d’arrivée</label></div>
      <div className="fld"><input className="input" id="date" name="date" type="date" placeholder="Date" /><label className="label" htmlFor="date">Date</label></div>
      <div className="fld"><select className="input" id="home" name="home" defaultValue=""><option value="" disabled>Type de logement</option><option>Studio</option><option>T2/T3</option><option>Maison</option></select><label className="label" htmlFor="home">Type de logement</label></div>
      <div className="md:col-span-2">
        <div ref={dropRef} onDragOver={e => { e.preventDefault(); dropRef.current?.classList.add('ring-2'); }} onDragLeave={() => dropRef.current?.classList.remove('ring-2')} onDrop={onDrop} className="card text-center py-10 border-dashed border-2 border-slate-200">
          <p className="mb-2">Déposez vos photos ici</p>
          <p className="small text-gray-500">ou cliquez pour sélectionner</p>
        </div>
        {files.length > 0 && (
          <ul className="mt-3 small text-gray-600 list-disc pl-5">
            {files.map((f, i) => <li key={i}>{f.name}</li>)}
          </ul>
        )}
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="btn btn-primary">Obtenir mes devis</button>
      </div>
    </form>
  );
}
