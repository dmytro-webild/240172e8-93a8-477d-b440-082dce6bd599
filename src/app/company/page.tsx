"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import TextAbout from '@/components/sections/about/TextAbout';

export default function CompanyPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/about" }, { name: "Company", id: "/company" }]} brandName="The Guerini Group" />
        <TextAbout title="Our Company" />
        <FooterBaseReveal logoText="The Guerini Group" columns={[{ title: "Company", items: [{ label: "Home", href: "/" }] }]} />
      </ReactLenis>
    </ThemeProvider>
  );
}