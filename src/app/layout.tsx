import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HumanOS - Tu Sistema Operativo Personal",
  description: "Gestiona las áreas más importantes de tu vida en un solo dashboard. Para líderes, emprendedores y ejecutivos que buscan claridad y control.",
  keywords: "productividad, sistema operativo personal, dashboard de vida, hábitos, métricas personales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
