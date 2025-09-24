import React, { useState } from 'react';

export function ContactForm() {
  const [consent, setConsent] = useState(false);
  return (
    <form className="grid md:grid-cols-2 gap-4">
      <div className="fld"><input className="input" id="name" name="name" placeholder="Nom" /><label className="label" htmlFor="name">Nom</label></div>
      <div className="fld"><input className="input" id="email" name="email" type="email" placeholder="Email" /><label className="label" htmlFor="email">Email</label></div>
      <div className="fld"><input className="input" id="phone" name="phone" type="tel" placeholder="Téléphone" /><label className="label" htmlFor="phone">Téléphone</label></div>
      <div className="fld"><select className="input" id="subject" name="subject" defaultValue=""><option value="" disabled>Sujet</option><option>Devis</option><option>Partenariat</option><option>Support</option></select><label className="label" htmlFor="subject">Sujet</label></div>
      <div className="md:col-span-2 fld"><textarea className="input" id="message" name="message" rows={5} placeholder="Message"></textarea><label className="label" htmlFor="message">Message</label></div>
      <label className="md:col-span-2 flex items-start gap-2 small">
        <input type="checkbox" className="mt-1" checked={consent} onChange={e => setConsent(e.target.checked)} />
        <span>J’accepte que mes données soient utilisées pour me recontacter.</span>
      </label>
      <div className="md:col-span-2">
        <button type="submit" className="btn btn-primary" aria-label="Envoyer">Envoyer</button>
      </div>
    </form>
  );
}
