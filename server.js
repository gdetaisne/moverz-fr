const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Performance middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.tailwindcss.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"]
    }
  }
}));

app.use(compression());

// Serve static files
app.use(express.static(__dirname, {
  maxAge: '1d', // Cache static files for 1 day
  etag: true
}));

// Routes for clean URLs (without .html)
const routes = [
  { path: '/', file: 'index.html' },
  { path: '/clients', file: 'clients.html' },
  { path: '/pro', file: 'pro.html' },
  { path: '/blog', file: 'blog.html' },
  { path: '/contact', file: 'contact.html' },
  { path: '/a-propos', file: 'a-propos.html' },
  { path: '/mentions-legales', file: 'mentions-legales.html' },
  { path: '/rgpd', file: 'rgpd.html' },
  { path: '/paris-devis-demenagement', file: 'paris-devis-demenagement.html' },
  { path: '/lyon-devis-demenagement', file: 'lyon-devis-demenagement.html' }
];

// Set up routes
routes.forEach(route => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, route.file));
  });
});

// Blog article route
app.get('/blog/prix-moyen-demenagement-france-2025', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog', 'prix-moyen-demenagement-france-2025.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// SEO files
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'robots.txt'));
});

// Health check for CapRover
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'DevisDemenagement.fr'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 DevisDemenagement.fr running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
});
