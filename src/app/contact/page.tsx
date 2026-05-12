"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ContactPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/#about" }, { name: "Services", id: "/#services" }, { name: "Listings", id: "/#listings" }, { name: "Testimonials", id: "/testimonials" }, { name: "FAQs", id: "/faqs" }, { name: "Contact", id: "/contact" }]} />
        <div className="pt-32">
          <ContactSplit 
            tag="Get In Touch"
            title="Schedule a Private Consultation"
            description="Ready to elevate your real estate journey? Our team is standing by to help."
            background={{ variant: "radial-gradient" }}
          />
        </div>
        <FooterBaseReveal columns={[]} logoText="The Guerini Group" />
      </ReactLenis>
    </ThemeProvider>
  );
}