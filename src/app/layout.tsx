import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team - Collaboration Tool for Remote Teams",
  description:
    "Team is a powerful collaboration tool designed for remote teams to work together efficiently and effectively.",
  authors: [{ name: "Aziz Khasyi" }],
  openGraph: {
    title: "Team - Collaboration Tool for Remote Teams",
    description:
      "Team is a powerful collaboration tool designed for remote teams to work together efficiently and effectively.",
    url: "https://teamdots.vercel.app",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased scroll-smooth bg-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
