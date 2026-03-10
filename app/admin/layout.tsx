import type { Metadata } from "next";
import Link from "next/link";

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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <Link href="/admin" className="text-xl font-bold text-blue-600">
                📊 Moverz Admin
              </Link>
              <div className="hidden md:flex space-x-4">
                <Link href="/admin/blog" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Blog
                </Link>
                <Link href="/admin/veille" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Veille
                </Link>
                <Link href="/admin/editorial" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Éditorial
                </Link>
                <Link href="/admin/linking" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Linking
                </Link>
                <Link href="/admin/studio" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  AI Studio
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">👤 Admin</span>
              <a href="/api/admin/auth/logout" className="text-sm text-red-600 hover:text-red-800">
                Déconnexion
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
        {children}
      </main>
    </>
  );
}
