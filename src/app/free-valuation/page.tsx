"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TextAnimation from '@/components/text/TextAnimation';
import ButtonExpandHover from '@/components/button/ButtonExpandHover';
import Textarea from '@/components/form/Textarea';

export default function FreeValuationPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  return (
    <ThemeProvider>
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "/#hero" },
            { name: "Free Valuation", id: "/free-valuation" }
          ]}
          button={{ text: "Contact", href: "/#contact" }}
          brandName="The Guerini Group"
        />
      </div>

      <main className="py-20 px-4 md:px-10 max-w-4xl mx-auto min-h-screen">
        {!submitted ? (
          <div className="space-y-8">
            <TextAnimation title="Free Property Valuation" variant="words-trigger" className="text-4xl font-bold" />
            <p className="text-lg">Fill out the form below to receive a professional property assessment from our luxury experts.</p>
            
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl">1. Property Details</h2>
                <input type="text" placeholder="Property Address" className="w-full p-4 border rounded" />
                <input type="number" placeholder="Estimated Square Footage" className="w-full p-4 border rounded" />
                <ButtonExpandHover text="Next" onClick={() => setStep(2)} />
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl">2. Property Condition</h2>
                <label className="flex items-center gap-2"><input type="checkbox" /> Recently Renovated</label>
                <label className="flex items-center gap-2"><input type="checkbox" /> Needs Minor Repairs</label>
                <Textarea value="" onChange={() => {}} placeholder="Other details..." />
                <div className="flex gap-4">
                    <ButtonExpandHover text="Back" onClick={() => setStep(1)} />
                    <ButtonExpandHover text="Next" onClick={() => setStep(3)} />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl">3. Contact Details</h2>
                <input type="text" placeholder="Full Name" className="w-full p-4 border rounded" />
                <input type="email" placeholder="Email" className="w-full p-4 border rounded" />
                <ButtonExpandHover text="Submit Valuation Request" onClick={() => setSubmitted(true)} />
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl">Thank You!</h2>
            <p className="mt-4">We have received your valuation request and will be in touch shortly.</p>
          </div>
        )}
        <p className="text-sm text-gray-500 mt-20 text-center italic">Your privacy is our priority. Your information will never be shared.</p>
      </main>

      <div id="about-us" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-lg px-4">At The Guerini Group, we leverage decades of high-end real estate experience to ensure your property is valued accurately and marketed to the right audience.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}