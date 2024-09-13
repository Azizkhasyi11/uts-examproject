import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import { Analytics } from "@vercel/analytics/next";
import { Provider } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team - Collaboration Tool for Remote Teams",
  description:
    "Remake by: Aziz Khasyi. Team is a powerful collaboration tool designed for remote teams to work together efficiently and effectively.",
  authors: [{ name: "Aziz Khasyi" }],
  openGraph: {
    title: "Team - Collaboration Tool for Remote Teams",
    description:
      "Remake by: Aziz Khasyi. Team is a powerful collaboration tool designed for remote teams to work together efficiently and effectively.",
    url: "https://teamdots.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "Team",
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
        className={`${montserrat.className} antialiased scroll-smooth bg-secondary`} suppressHydrationWarning
      >
        <Provider>
          <Navbar />
          <div className="min-h-dvh bg-white dark:bg-gray-950 dark:text-white">
            {children}
          </div>
          <Footer />
          <ToTop />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
