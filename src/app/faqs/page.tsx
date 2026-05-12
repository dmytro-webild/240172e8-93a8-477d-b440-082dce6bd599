"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function FaqsPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/#about" }, { name: "Services", id: "/#services" }, { name: "Listings", id: "/#listings" }, { name: "Testimonials", id: "/testimonials" }, { name: "FAQs", id: "/faqs" }, { name: "Contact", id: "/contact" }]} />
        <div className="pt-32">
          <FaqBase 
            title="Frequently Asked Questions"
            description="Everything you need to know about our services and process."
            faqsAnimation="slide-up"
            textboxLayout="default"
            faqs={[
              { id: "1", title: "How do I start?", content: "Contact us to schedule a meeting." },
              { id: "2", title: "Do you work with investors?", content: "Yes, we specialize in high-yield investments." }
            ]}
          />
        </div>
        <FooterBaseReveal columns={[]} logoText="The Guerini Group" />
      </ReactLenis>
    </ThemeProvider>
  );
}