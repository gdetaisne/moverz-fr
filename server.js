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
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"]
    }
  }
}));

app.use(compression());

// Serve Vite build output
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir, { maxAge: '1w', etag: true }));

// Serve legacy static assets (logos, images)
app.use(express.static(__dirname, { maxAge: '1d', etag: true }));

// Legacy HTML routes removed in favor of SPA
const routes = [];
routes.forEach(route => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, route.file));
  });
});

// Blog article static route (kept as standalone HTML for now)
app.get('/blog/prix-moyen-demenagement-france-2025', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog', 'prix-moyen-demenagement-france-2025.html'));
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
    service: 'Moverz.fr'
  });
});

// SPA fallback (excluding known static endpoints)
app.get(/^(?!\/(sitemap\.xml|robots\.txt|blog\/prix-moyen-demenagement-france-2025)).*$/, (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Moverz.fr running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
});
