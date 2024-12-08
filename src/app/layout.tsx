import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/top-nav";
import MiddleNav from "./components/middle-nav";
import BottomNav from "./components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comforty",
  description: "Web App by theeasadali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TopNav/>
      <MiddleNav/>
      <BottomNav/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
