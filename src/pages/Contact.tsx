import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Moverz</title>
      </Helmet>
      <section className="section">
        <div className="container space-y-6">
          <h1 className="h1">Contact</h1>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="card"><h2 className="h3 mb-1">Général</h2><p className="small">hello@moverz.fr</p></article>
            <article className="card"><h2 className="h3 mb-1">Partenariats</h2><p className="small">partners@moverz.fr</p></article>
            <article className="card"><h2 className="h3 mb-1">Support</h2><p className="small">support@moverz.fr</p></article>
          </div>
          <div className="card">
            <h2 className="h2 mb-4">Nous écrire</h2>
            <ContactForm />
          </div>
          <div className="card">
            <h2 className="h2 mb-2">Prendre un rendez-vous</h2>
            <p className="small text-gray-600 mb-3">Planifiez un créneau via Calendly.</p>
            <div className="aspect-video bg-slate-100 rounded-xl grid place-items-center text-gray-500">Calendly</div>
          </div>
        </div>
      </section>
    </>
  );
}
