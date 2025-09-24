import React from 'react';

export function DemoForm() {
  return (
    <form className="grid md:grid-cols-2 gap-4">
      <div className="fld"><input className="input" id="company" name="company" placeholder="Société" /><label className="label" htmlFor="company">Société</label></div>
      <div className="fld"><input className="input" id="siret" name="siret" placeholder="SIRET (optionnel)" /><label className="label" htmlFor="siret">SIRET (optionnel)</label></div>
      <div className="fld"><input className="input" id="proEmail" name="proEmail" type="email" placeholder="Email pro" /><label className="label" htmlFor="proEmail">Email pro</label></div>
      <div className="fld"><input className="input" id="proPhone" name="proPhone" type="tel" placeholder="Téléphone" /><label className="label" htmlFor="proPhone">Téléphone</label></div>
      <div className="fld"><select className="input" id="size" name="size" defaultValue=""><option value="" disabled>Effectif</option><option>1-5</option><option>6-20</option><option>21-50</option><option>50+</option></select><label className="label" htmlFor="size">Effectif</label></div>
      <div className="md:col-span-2 fld"><textarea className="input" id="message" name="message" rows={5} placeholder="Message"></textarea><label className="label" htmlFor="message">Message</label></div>
      <div className="md:col-span-2">
        <button type="submit" className="btn btn-primary">Demander une démo</button>
      </div>
    </form>
  );
}
