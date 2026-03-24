import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'The Guerini Group | Luxury Real Estate Advisors',
  description: 'Elevating your real estate experience with John & Silvia Guerini. Concierge-level service for buying, selling, and investing in luxury properties. Your trusted advisors.',
  keywords: ["luxury real estate, real estate advisors, high-end homes, buy sell invest, John Silvia Guerini, concierge real estate, property investment, dream homes"],
  openGraph: {
    "title": "The Guerini Group | Luxury Real Estate Advisors",
    "description": "Elevating your real estate experience with John & Silvia Guerini. Concierge-level service for buying, selling, and investing in luxury properties. Your trusted advisors.",
    "url": "https://www.guerinigroup.com",
    "siteName": "The Guerini Group",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-psd/classic-ballroom-award-ceremony-generative-ai_587448-1905.jpg",
        "alt": "Luxury home interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "The Guerini Group | Luxury Real Estate Advisors",
    "description": "Elevating your real estate experience with John & Silvia Guerini. Concierge-level service for buying, selling, and investing in luxury properties. Your trusted advisors.",
    "images": [
      "http://img.b2bpic.net/free-psd/classic-ballroom-award-ceremony-generative-ai_587448-1905.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
