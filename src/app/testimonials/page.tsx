"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function TestimonialsPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }, { name: "Testimonials", id: "/testimonials" }]} />
        </div>
        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve cardTitle="Client Stories" cardTag="Reviews" cardAnimation="slide-up" useInvertedBackground={false} testimonials={[{ id: "1", name: "John D.", imageSrc: "/img/user1.jpg" }]} />
        </div>
        <div id="footer" data-section="footer">
          <FooterBaseReveal logoText="The Guerini Group" columns={[{ title: "Company", items: [{ label: "Home", href: "/" }] }]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}