import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MemVault — Forever in Art, Forever in Heart",
    template: "%s | MemVault",
  },
  description:
    "Turn your memories into beautifully crafted keepsakes — custom magazines, photo albums, recap reels and more.",
  keywords: ["custom magazine", "memory keepsake", "photo album", "personalized gift", "recap reel"],
  openGraph: {
    title: "MemVault — Forever in Art, Forever in Heart",
    description: "Turn your memories into beautifully crafted keepsakes.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "hsl(20 14% 8%)",
              color: "hsl(40 20% 95%)",
              border: "1px solid hsl(43 96% 56% / 0.3)",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}