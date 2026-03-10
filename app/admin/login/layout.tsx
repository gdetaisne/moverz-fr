import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Moverz Admin",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
