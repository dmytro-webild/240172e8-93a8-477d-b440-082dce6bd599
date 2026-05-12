"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ServicesPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleCentered navItems={[{name: "Home", id: "/"}, {name: "Services", id: "/services"}, {name: "Listings", id: "/listings"}, {name: "Resources", id: "/resources"}, {name: "Contact", id: "#contact"}]} />
        <div className="min-h-screen pt-32 p-8">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <p>Our bespoke real estate services cater to discerning clients seeking luxury property solutions.</p>
        </div>
        <FooterBaseReveal columns={[{title: "Company", items: [{label: "Home", href: "/"}, {label: "Services", href: "/services"}, {label: "Listings", href: "/listings"}]}]} logoText="The Guerini Group" />
      </ReactLenis>
    </ThemeProvider>
  );
}