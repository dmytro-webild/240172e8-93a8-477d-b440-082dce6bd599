"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LegalPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleCentered navItems={[{name: "Home", id: "/"}]} brandName="The Guerini Group" />
        <LegalSection 
          layout="page" 
          title="Legal Information"
          sections={[{ heading: "Legal Notice", content: { type: "paragraph", text: "This page contains the official legal information for The Guerini Group." } }]}
        />
        <FooterBaseReveal columns={[]} logoText="The Guerini Group" />
      </ReactLenis>
    </ThemeProvider>
  );
}