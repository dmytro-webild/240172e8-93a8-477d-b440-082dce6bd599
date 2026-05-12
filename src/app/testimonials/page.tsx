"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function TestimonialsPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/#about" }, { name: "Services", id: "/#services" }, { name: "Listings", id: "/#listings" }, { name: "Testimonials", id: "/testimonials" }, { name: "FAQs", id: "/faqs" }, { name: "Contact", id: "/contact" }]} />
        <div className="pt-32">
           <TestimonialCardTwelve 
             cardTitle="Client Success Stories"
             cardTag="Top 10 Google Reviews"
             cardAnimation="slide-up"
             testimonials={[{id: "1", name: "Sarah J.", imageSrc: "http://img.b2bpic.net/free-photo/black-man-general-manager-connects-with-his-team-via-video-call_482257-123824.jpg"}, {id: "2", name: "Michael T.", imageSrc: "http://img.b2bpic.net/free-photo/lucky-man_1368-6349.jpg"}]}
           />
        </div>
        <FooterBaseReveal columns={[]} logoText="The Guerini Group" />
      </ReactLenis>
    </ThemeProvider>
  );
}