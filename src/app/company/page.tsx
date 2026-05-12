"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import TextAbout from '@/components/sections/about/TextAbout';

export default function CompanyPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/about" }, { name: "Company", id: "/company" }]} />
        </div>
        <div id="about" data-section="about">
          <TextAbout title="Our Company" useInvertedBackground={false} />
        </div>
        <div id="footer" data-section="footer">
          <FooterBaseReveal logoText="The Guerini Group" columns={[{ title: "Company", items: [{ label: "Home", href: "/" }] }]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}