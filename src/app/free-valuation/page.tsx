"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TextAnimation from '@/components/text/TextAnimation';

export default function ValuationPage() {
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

        <div className="container mx-auto py-20">
            <TextAnimation 
              title="Free Property Valuation" 
              className="text-4xl" 
              type="entrance-slide" 
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
