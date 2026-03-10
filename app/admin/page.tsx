import Link from "next/link";
import { BlogIcon, SearchIcon, CalendarIcon, LinkIcon, SparklesIcon, ChartIcon, CheckCircleIcon, LightningIcon } from "@/components/admin/Icons";

const dashboardCards = [
  {
    href: "/admin/blog",
    Icon: BlogIcon,
    title: "Blog Dashboard",
    description: "Monitoring des articles, analytics GSC, métriques SEO",
    gradient: "from-accent/10 to-accent-light/10",
    borderColor: "border-accent",
    iconColor: "text-accent",
  },
  {
    href: "/admin/veille",
    Icon: SearchIcon,
    title: "Veille Concurrentielle",
    description: "Scraping, gap analysis, heatmap de couverture",
    gradient: "from-purple-50 to-purple-100/50",
    borderColor: "border-purple-400",
    iconColor: "text-purple-600",
  },
  {
    href: "/admin/editorial",
    Icon: CalendarIcon,
    title: "Calendrier Éditorial",
    description: "Kanban, workflow, planning de production",
    gradient: "from-green-50 to-green-100/50",
    borderColor: "border-green-400",
    iconColor: "text-green-600",
  },
  {
    href: "/admin/linking",
    Icon: LinkIcon,
    title: "Internal Linking",
    description: "Suggestions auto, clusters, graph de maillage",
    gradient: "from-orange-50 to-orange-100/50",
    borderColor: "border-orange-400",
    iconColor: "text-orange-600",
  },
  {
    href: "/admin/studio",
    Icon: SparklesIcon,
    title: "AI Content Studio",
    description: "Génération articles SEO/E-E-A-T depuis query",
    gradient: "from-pink-50 to-pink-100/50",
    borderColor: "border-pink-400",
    iconColor: "text-pink-600",
  },
];

const quickActions = [
  { label: "Lancer scraping", href: "/admin/veille" },
  { label: "Analyser gaps", href: "/admin/veille" },
  { label: "Sync GSC data", href: "/admin/blog" },
  { label: "Générer article", href: "/admin/studio" },
];

export default function AdminHomePage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border-light p-10">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-heading text-4xl font-800 text-v4-text mb-3">
              Content Intelligence Platform
            </h1>
            <p className="font-sans text-lg text-v4-text-secondary font-medium max-w-2xl">
              Système complet de gestion et d'intelligence du contenu Moverz
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
            <span className="font-sans text-sm font-600 text-accent">System Actif</span>
          </div>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card) => {
          const Icon = card.Icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border 
                       p-8 hover:shadow-glow-turquoise hover:-translate-y-1
                       transition-all duration-300"
            >
              <div className={`inline-flex p-3 bg-gradient-to-br ${card.gradient} rounded-xl mb-5 
                             border ${card.borderColor} border-opacity-30
                             group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-7 h-7 ${card.iconColor}`} />
              </div>
              <h2 className="font-heading text-xl font-700 text-v4-text mb-2">
                {card.title}
              </h2>
              <p className="font-sans text-sm text-v4-text-secondary leading-relaxed">
                {card.description}
              </p>
            </Link>
          );
        })}

        {/* System Status Card */}
        <div className="bg-gradient-to-br from-accent/5 to-accent-light/10 backdrop-blur-sm 
                      rounded-2xl shadow-sm border border-accent/20 p-8">
          <div className="inline-flex p-3 bg-white rounded-xl mb-5 shadow-sm">
            <ChartIcon className="w-7 h-7 text-accent" />
          </div>
          <h2 className="font-heading text-xl font-700 text-v4-text mb-4">
            Système Status
          </h2>
          <div className="space-y-3">
            {[
              { label: "Auth System", status: "Actif" },
              { label: "NoIndex Protection", status: "Actif" },
              { label: "GSC API", status: "Configuré" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center">
                <span className="font-sans text-sm text-v4-text-secondary">{item.label}</span>
                <span className="flex items-center gap-1.5 font-sans text-xs font-600 text-green-600">
                  <CheckCircleIcon className="w-4 h-4" />
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border-light p-8">
        <h3 className="font-heading text-xl font-700 text-v4-text mb-6 flex items-center gap-3">
          <LightningIcon className="w-6 h-6 text-accent" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="px-5 py-3 bg-white rounded-xl border border-v4-border
                       font-sans text-sm font-600 text-v4-text
                       hover:border-accent hover:bg-accent/5 hover:-translate-y-0.5
                       transition-all duration-300 text-center shadow-sm"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
