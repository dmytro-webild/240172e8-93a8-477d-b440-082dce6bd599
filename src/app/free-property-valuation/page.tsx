"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TextAbout from '@/components/sections/about/TextAbout';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function PropertyValuationPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <ThemeProvider 
        defaultButtonVariant="text-stagger" 
        defaultTextAnimation="entrance-slide" 
        borderRadius="rounded" 
        contentWidth="medium" 
        sizing="medium" 
        background="circleGradient" 
        cardStyle="glass-elevated" 
        primaryButtonStyle="gradient" 
        secondaryButtonStyle="glass" 
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav">
          <NavbarStyleCentered 
            navItems={[
              { name: "Home", id: "/" },
              { name: "Valuation", id: "/free-property-valuation" },
              { name: "Contact", id: "/" }
            ]}
            brandName="The Guerini Group"
            button={{ text: "Contact" }}
          />
        </div>

        <div className="container mx-auto py-20 px-6">
          {submitted ? (
            <div className="max-w-2xl mx-auto p-10 bg-card rounded shadow-lg text-center">
              <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
              <p>Your valuation request has been submitted successfully. A specialist will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="max-w-3xl mx-auto p-10 bg-card rounded shadow-lg">
              <h1 className="text-4xl font-bold mb-8">Free Property Valuation</h1>
              <div className="space-y-6">
                <input type="text" placeholder="Property Address" className="w-full p-4 border rounded" required />
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" placeholder="Estimated Sq. Footage" className="w-full p-4 border rounded" />
                  <input type="number" placeholder="Bedrooms" className="w-full p-4 border rounded" />
                </div>
                <div className="space-y-2">
                  <label className="font-semibold">Property Condition:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Excellent', 'Good', 'Needs Minor Work', 'Needs Major Renovation'].map(c => (
                      <label key={c} className="flex items-center gap-2"><input type="checkbox" /> {c}</label>
                    ))}
                  </div>
                  <input type="text" placeholder="Other details..." className="w-full p-3 border rounded" />
                </div>
                <input type="email" placeholder="Your Email" className="w-full p-4 border rounded" required />
                <button type="submit" className="w-full p-4 bg-primary-cta text-white font-bold rounded">Request Valuation</button>
                <p className="text-xs text-muted">* Your information is strictly private and used only for your custom valuation.</p>
              </div>
            </form>
          )}
        </div>

        <div id="about">
           <TextAbout title="Why Choose Us" useInvertedBackground={false} />
        </div>

        <div id="footer">
          <FooterBaseReveal columns={[]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
