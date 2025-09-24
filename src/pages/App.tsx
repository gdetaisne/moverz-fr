import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SiteLayout } from '@/layouts/SiteLayout';
import Home from '@/pages/Home';
import Clients from '@/pages/Clients';
import Pro from '@/pages/Pro';
import BlogList from '@/pages/BlogList';
import Contact from '@/pages/Contact';
import Story from '@/pages/Story';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Moverz – Estimation de déménagement par IA, rapide & précise</title>
        <meta name="description" content="Obtenez 3 devis fiables en 5 minutes grâce à l’IA. Sans visite technique." />
      </Helmet>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<Story />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteLayout>
    </HelmetProvider>
  );
}
