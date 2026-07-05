import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display", weight: ["700","800","900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"Positive Crave — Konsep Noir","description":"Landing page brand keintiman","url":"https://crave-noir.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://crave-noir.vercel.app"),
  title: "Positive Crave — Konsep Noir",
  description: "Landing page Positive Crave konsep \"Noir\": intimacy essentials untuk pasangan — berani, playful, dan percaya diri.",
  applicationName: "Positive Crave",
  keywords: ["intimacy brand", "wellness pasangan", "landing page", "desain web", "positive crave"],
  authors: [{ name: "Positive Crave" }],
  creator: "Positive Crave",
  publisher: "Positive Crave",
  alternates: { canonical: "https://crave-noir.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://crave-noir.vercel.app",
    siteName: "Positive Crave",
    title: "Positive Crave — Konsep Noir",
    description: "Landing page Positive Crave konsep \"Noir\": intimacy essentials untuk pasangan — berani, playful, dan percaya diri.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Positive Crave — Konsep Noir" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Positive Crave — Konsep Noir",
    description: "Landing page Positive Crave konsep \"Noir\": intimacy essentials untuk pasangan — berani, playful, dan percaya diri.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
