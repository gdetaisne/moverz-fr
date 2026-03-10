import type { Metadata } from "next";
import Link from "next/link";
import { MoverzLogo } from "@/components/admin/MoverzLogo";

export const metadata: Metadata = {
  title: "Admin Dashboard - Moverz Content Intelligence",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    noimageindex: true,
    nositelinkssearchbox: true,
  },
};

const navItems = [
  { href: "/admin/blog", label: "Blog", icon: "📝" },
  { href: "/admin/veille", label: "Veille", icon: "🔍" },
  { href: "/admin/editorial", label: "Éditorial", icon: "📅" },
  { href: "/admin/linking", label: "Linking", icon: "🔗" },
  { href: "/admin/studio", label: "AI Studio", icon: "✨" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="bg-white/80 backdrop-blur-xl border-b border-v4-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <Link href="/admin" className="flex items-center gap-2 group">
                <MoverzLogo className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />
                <span className="hidden lg:inline font-heading font-600 text-v4-text-secondary text-sm">
                  Admin
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 font-sans text-sm font-500 text-v4-text-secondary 
                             hover:text-accent hover:bg-accent/5 rounded-xl
                             transition-all duration-300"
                  >
                    <span className="mr-1.5">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="font-sans text-xs font-600 text-accent">Admin</span>
              </div>
              <a 
                href="/api/admin/auth/logout" 
                className="font-sans text-sm font-500 text-v4-text-muted hover:text-red-600 
                         transition-colors duration-300"
              >
                Déconnexion
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main 
        className="min-h-screen"
        style={{
          background: `radial-gradient(1200px 600px at 50% 0%, rgba(107, 207, 207, 0.08), transparent 70%),
                       #FAFAFA`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {children}
        </div>
      </main>
    </>
  );
}
