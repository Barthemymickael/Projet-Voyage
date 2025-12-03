export const metadata = {
  title: "Mon voyage au Japon 2025-2026",
  description: "Une vitrine animée de mon périple : Mon PolarStep version plus personnelle",
};

import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}