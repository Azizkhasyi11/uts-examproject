import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";

const lexendDeca = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team",
  description: "Team is a collaboration tool for remote teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.className} antialiased scroll-smooth bg-secondary`}
      >
        <Navbar />
        <div className="min-h-dvh bg-white">{children}</div>
        <Footer />
        <ToTop />
      </body>
    </html>
  );
}
