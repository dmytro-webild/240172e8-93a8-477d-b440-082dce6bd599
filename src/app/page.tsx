"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="medium"
        background="blurBottom"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Listings", id: "listings" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      button={{ text: "Schedule Consultation", onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
      brandName="The Guerini Group"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "radial-gradient" }}
      title="Elevating Your Real Estate Experience"
      description="Buy, Sell, and Invest with Confidence. With The Guerini Group, you gain dedicated advisors committed to your long-term wealth."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/boston-panorama_649448-1007.jpg?id=26742803", imageAlt: "Modern luxury home interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/modern-house-with-pool-lush-greenery_23-2152008205.jpg", imageAlt: "Luxury villa with infinity pool" },
        { imageSrc: "http://img.b2bpic.net/free-photo/people-making-pasta-together-medium-shot_23-2149631676.jpg", imageAlt: "Gourmet kitchen in a luxury home" },
        { imageSrc: "http://img.b2bpic.net/free-photo/boston-morning_649448-792.jpg?id=26741976", imageAlt: "Luxurious master bedroom" },
        { imageSrc: "http://img.b2bpic.net/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bathroom_1203-2726.jpg", imageAlt: "Spa-like luxury bathroom" },
        { imageSrc: "http://img.b2bpic.net/free-photo/romantic-couple-embracing-each-other-while-outdoors-night_23-2149215087.jpg", imageAlt: "Modern home exterior at twilight" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/modern-dining-room-living-room-with-luxury-decor_105762-1672.jpg", imageAlt: "Modern luxury home interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-outdoor-swimming-pool-hotel-resort-with-chair-deck-leisure-vacation_74190-8436.jpg", imageAlt: "Luxury villa with infinity pool" },
        { imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-wear-shirt-underwear-cooking-white-kitchen_627829-10511.jpg", imageAlt: "Gourmet kitchen in a luxury home" },
        { imageSrc: "http://img.b2bpic.net/free-photo/architecture_1122-1804.jpg", imageAlt: "Luxurious master bedroom" },
        { imageSrc: "http://img.b2bpic.net/free-photo/woman-towel-her-head-bathrobe-reads-latest-news-lady-with-cup-tea-posing-bathroom_197531-17268.jpg", imageAlt: "Spa-like luxury bathroom" },
        { imageSrc: "http://img.b2bpic.net/free-photo/walking-couple-with-dogs-autumn-forest-owners-with-golden-labrador-relaxing-near-car_496169-1056.jpg?id=18017170", imageAlt: "Modern home exterior at twilight" },
      ]}
      tag="Luxury Real Estate Advisors"
      tagAnimation="slide-up"
      buttons={[
        { text: "Browse Luxury Listings", href: "#listings" },
        { text: "Get a Free Property Valuation", onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      cardTitle="Client Success Stories"
      cardTag="Top 10 Google Reviews"
      cardAnimation="slide-up"
      testimonials={[
        { id: "1", name: "Sarah J.", imageSrc: "http://img.b2bpic.net/free-photo/black-man-general-manager-connects-with-his-team-via-video-call_482257-123824.jpg" },
        { id: "2", name: "Michael T.", imageSrc: "http://img.b2bpic.net/free-photo/lucky-man_1368-6349.jpg" },
        { id: "3", name: "Emily R.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-man-posing_23-2148563424.jpg" },
        { id: "4", name: "David K.", imageSrc: "http://img.b2bpic.net/free-photo/executive-assistant-multinational-company-work-big-business-project_482257-113916.jpg" },
        { id: "5", name: "Jessica L.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-cool-young-black-man-with-curly-hair-has-cheerful-expression_273609-8605.jpg" },
        { id: "6", name: "Robert S.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-female-with-hair-bun-having-joyful-look-smiling-cheerfully-happy-with-some-positive-news_273609-9042.jpg" },
        { id: "7", name: "Linda W.", imageSrc: "http://img.b2bpic.net/free-photo/happy-woman_1368-6348.jpg" },
        { id: "8", name: "Mark D.", imageSrc: "http://img.b2bpic.net/free-photo/friendly-man_1368-6350.jpg" },
        { id: "9", name: "Elena P.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-business-woman_23-2148563424.jpg" },
        { id: "10", name: "James H.", imageSrc: "http://img.b2bpic.net/free-photo/professional-man_1368-6351.jpg" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Your Trusted Advisors: John & Silvia Guerini"
      buttons={[{ text: "Meet John & Silvia", href: "#" }]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { id: "1", title: "Buying Your Dream Home", tags: ["Guidance", "Luxury Access"], imageSrc: "http://img.b2bpic.net/free-vector/heart-key-multiple-styles_78370-7845.jpg" },
        { id: "2", title: "Selling for Top Value", tags: ["Marketing", "Negotiation"], imageSrc: "http://img.b2bpic.net/free-vector/minimalist-investate-logo-design_23-2149543234.jpg" },
        { id: "3", title: "Strategic Real Estate Investments", tags: ["Wealth Building", "Market Insights"], imageSrc: "http://img.b2bpic.net/free-vector/gradient-real-estate-infographics_52683-67156.jpg" },
      ]}
      title="Concierge Real Estate Services"
      description="Whether you're buying your first home, selling an investment property, or strategically expanding your portfolio, The Guerini Group offers unparalleled guidance and support at every stage."
    />
  </div>

  <div id="results" data-section="results">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "100%", title: "First-Time Buyer Success", description: "Helping families find their perfect first home with ease and confidence.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-happy-couple-together-their-new-house-conception-moving_146671-16185.jpg" },
        { id: "2", value: "Avg. 30 Days", title: "Fast Transactions", description: "Efficiently closing deals, often faster than market average, for seamless transitions.", imageSrc: "http://img.b2bpic.net/free-photo/people-practicing-social-integration-workspace_23-2149405354.jpg" },
        { id: "3", value: "+15%", title: "Above-Expected Returns", description: "Achieving superior returns for our investor clients through expert market strategy.", imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-man-city_23-2148296604.jpg" },
      ]}
      title="Proven Results, Exceptional Experiences"
      description="Our commitment to excellence translates into tangible outcomes for our clients, from securing dream homes to maximizing returns on investment."
    />
  </div>

  <div id="listings" data-section="listings">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "Modern Hillside Estate", price: "$5,200,000", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-streets-switzerland_8353-9666.jpg", imageAlt: "Modern Hillside Estate" },
        { id: "2", name: "Downtown Luxury Loft", price: "$1,850,000", imageSrc: "http://img.b2bpic.net/free-photo/glass-wine-decorated-table_1162-214.jpg", imageAlt: "Downtown Luxury Loft" },
        { id: "3", name: "Coastal View Residence", price: "$7,100,000", imageSrc: "http://img.b2bpic.net/free-photo/pillow-sofa_74190-2069.jpg", imageAlt: "Coastal View Residence" },
        { id: "4", name: "Suburban Executive Home", price: "$2,995,000", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-bathtub_23-2148271112.jpg", imageAlt: "Suburban Executive Home" },
      ]}
      title="Exclusive Featured Listings"
      description="Explore a curated selection of luxury properties that match our discerning standards. Your next dream home awaits."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "radial-gradient" }}
      text="Ready to elevate your real estate journey? Contact The Guerini Group today for a private consultation. We respond quickly."
      buttons={[
        { text: "Schedule Consultation", onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
        { text: "View Listings", href: "#listings" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        { title: "Company", items: [{ label: "Home", href: "#hero" }, { label: "About Us", href: "#about" }, { label: "Services", href: "#services" }, { label: "Listings", href: "#listings" }] },
        { title: "Resources", items: [{ label: "Testimonials", href: "#testimonials" }, { label: "Contact", href: "#contact" }, { label: "FAQs", href: "#" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
      ]}
      copyrightText="© 2024 The Guerini Group. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}