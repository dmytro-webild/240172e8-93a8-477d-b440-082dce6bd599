"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function TermsOfServicePage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }]} />
        </div>
        <div id="terms" data-section="terms">
          <LegalSection layout="page" title="Terms of Service" sections={[{ heading: "Terms", content: { type: "paragraph", text: "By using this site..." } }]} />
        </div>
        <div id="footer" data-section="footer">
          <FooterBaseReveal logoText="The Guerini Group" columns={[{ title: "Company", items: [{ label: "Home", href: "/" }] }]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}