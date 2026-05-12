"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function TermsOfServicePage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleCentered navItems={[{name: "Home", id: "/"}]} brandName="The Guerini Group" />
        <LegalSection 
          layout="page" 
          title="Terms of Service"
          sections={[{ heading: "Usage Terms", content: { type: "paragraph", text: "By using our website, you agree to comply with our terms and conditions." } }]}
        />
        <FooterBaseReveal columns={[]} logoText="The Guerini Group" />
      </ReactLenis>
    </ThemeProvider>
  );
}