"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function PrivacyPolicyPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleCentered navItems={[{name: "Home", id: "/"}]} brandName="The Guerini Group" />
        <LegalSection 
          layout="page" 
          title="Privacy Policy"
          sections={[{ heading: "Data Collection", content: { type: "paragraph", text: "We collect information to provide better services to our clients." } }]}
        />
        <FooterBaseReveal columns={[]} logoText="The Guerini Group" />
      </ReactLenis>
    </ThemeProvider>
  );
}