import Link from "next/link";

export default function AdminHomePage() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🚀 Content Intelligence Platform
        </h1>
        <p className="text-gray-600">
          Système complet de gestion et d'intelligence du contenu Moverz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/admin/blog" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-blue-500">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">📝</span>
            <h2 className="text-xl font-bold text-gray-900">Blog Dashboard</h2>
          </div>
          <p className="text-gray-600">Monitoring des articles, analytics GSC, métriques SEO</p>
        </Link>

        <Link href="/admin/veille" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-purple-500">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">🔍</span>
            <h2 className="text-xl font-bold text-gray-900">Veille Concurrentielle</h2>
          </div>
          <p className="text-gray-600">Scraping, gap analysis, heatmap de couverture</p>
        </Link>

        <Link href="/admin/editorial" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-green-500">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">📅</span>
            <h2 className="text-xl font-bold text-gray-900">Calendrier Éditorial</h2>
          </div>
          <p className="text-gray-600">Kanban, workflow, planning de production</p>
        </Link>

        <Link href="/admin/linking" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-orange-500">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">🔗</span>
            <h2 className="text-xl font-bold text-gray-900">Internal Linking</h2>
          </div>
          <p className="text-gray-600">Suggestions auto, clusters, graph de maillage</p>
        </Link>

        <Link href="/admin/studio" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-pink-500">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">✨</span>
            <h2 className="text-xl font-bold text-gray-900">AI Content Studio</h2>
          </div>
          <p className="text-gray-600">Génération articles SEO/E-E-A-T depuis query</p>
        </Link>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm p-6 border-l-4 border-gray-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">📊</span>
            <h2 className="text-xl font-bold text-gray-900">Système Status</h2>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Auth System</span>
              <span className="text-green-600 font-medium">✓ Actif</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">NoIndex Protection</span>
              <span className="text-green-600 font-medium">✓ Actif</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">GSC API</span>
              <span className="text-green-600 font-medium">✓ Configuré</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-bold text-blue-900 mb-2">🎯 Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="bg-white px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 border">
            Lancer scraping
          </button>
          <button className="bg-white px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 border">
            Analyser gaps
          </button>
          <button className="bg-white px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 border">
            Sync GSC data
          </button>
          <button className="bg-white px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 border">
            Générer article
          </button>
        </div>
      </div>
    </div>
  );
}
