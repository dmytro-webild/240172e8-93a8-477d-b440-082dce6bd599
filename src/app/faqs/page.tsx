"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function FaqsPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }, { name: "FAQs", id: "/faqs" }, { name: "Contact", id: "/contact" }]} />
        </div>
        <div id="faqs" data-section="faqs">
          <FaqBase title="Frequently Asked Questions" description="Answers to common questions." faqsAnimation="slide-up" textboxLayout="default" useInvertedBackground={false} faqs={[{ id: "1", title: "How do I start?", content: "Contact us today." }]} />
        </div>
        <div id="footer" data-section="footer">
          <FooterBaseReveal logoText="The Guerini Group" columns={[{ title: "Support", items: [{ label: "FAQs", href: "/faqs" }] }]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}