import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display", weight: ["700","800","900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Positive Crave — Konsep Noir",
  description: "Positive Crave: intimacy essentials untuk pasangan — konsep noir yang berani dan playful.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
