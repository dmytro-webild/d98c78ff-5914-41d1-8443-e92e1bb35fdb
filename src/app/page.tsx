"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { useState } from "react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import { Layout, Search, Target, CheckCircle } from "lucide-react";

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = () => {
    setSubmitted(true);
  };

  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLarge"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Pricing", id: "pricing" },
        { name: "Our Mission", id: "founder" },
        { name: "Services", id: "services" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Loop Web"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{ variant: "gradient-bars" }}
      title="More Customers. Better Websites. Built for Local Businesses."
      description="Loop Web Company helps small businesses get more calls, bookings, and visibility online. Get a high-converting website that works as hard as you do."
      testimonials={[]}
      buttons={[
        { text: "Scroll To Bottom ", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-network-communications-background-with-low-poly-plexus-design_1048-13853.jpg"
      imageAlt="tech abstract blue background"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
    <PricingCardTwo
      title="Choose Your Plan"
      description="Simple, transparent pricing for your business growth."
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "tier-1",          badge: "Starter",          price: "$249",          subtitle: "Setup Fee",          features: ["Custom Design", "Mobile Responsive", "Local SEO Ready"],
          buttons: [{ text: "See Below", href: "#contact" }]
        },
        {
          id: "tier-2",          badge: "Growth",          price: "$249+ $100/mo",          subtitle: "Setup + Ongoing Support",          features: ["Everything in Starter", "Monthly Maintenance", "Performance Tracking"],
          buttons: [{ text: "See Below", href: "#contact" }]
        },
        {
          id: "tier-3",          badge: "Scale",          price: "$249+ $300/mo",          subtitle: "Premium Growth Pack",          features: ["Everything in Growth", "Advanced SEO", "Priority Support", "Content Updates"],
          buttons: [{ text: "See Below", href: "#contact" }]
        }
      ]}
    />
  </div>

  <div id="founder" data-section="founder">
    <TeamCardFive
      animationType="slide-up"
      title="Our Mission"
      description="At Loop Web, we believe local businesses are the heart of our community. Our mission is simple: to help you compete online with professional, effective, and high-converting websites that turn curious visitors into loyal customers."
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        { id: "founder", name: "Brayden Eustice", role: "Founder & Lead Strategist", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CrpWp8ExDJwKhzhEC08cSwDDoH/uploaded-1777157215902-kx6ghlpi.jpg" }
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { icon: Layout, title: "Website Design", description: "Custom, mobile-friendly websites that showcase your business professionally." },
        { icon: Search, title: "SEO Setup", description: "Local SEO strategies to help you get found by customers in your area." },
        { icon: Target, title: "Lead Gen Optimization", description: "High-conversion elements strategically designed to increase calls and bookings." },
      ]}
      title="Services That Drive Growth"
      description="We specialize in results-oriented digital solutions for local small businesses."
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        { id: "1", value: "01", title: "Contact Us", items: ["Book your free discovery call and tell us about your goals."] },
        { id: "2", value: "02", title: "We Design", items: ["We build a custom, high-converting website mockup for your review."] },
        { id: "3", value: "03", title: "More Customers", items: ["Launch your site and watch the calls, bookings, and visibility grow."] },
      ]}
      title="How It Works"
      description="We keep things simple and results-focused."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[]}
      title="Our Recent Work"
      description="Examples of successful web designs built for local businesses."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How long does a website take?", content: "Most projects are completed in 2-4 weeks depending on scope." },
        { id: "f2", title: "Do you provide SEO?", content: "Yes, we integrate local SEO strategies for every site we build." },
        { id: "f3", title: "Can I edit my site later?", content: "Yes, we build sites using user-friendly platforms so you can easily make updates." },
      ]}
      title="Frequently Asked Questions"
      description="Got questions? We've got answers."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/female-web-designer-office-with-tablet-device_23-2149749887.jpg"
      imageAlt="Female web designer in the office with tablet device"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      {submitted ? (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
          <h2 className="text-3xl font-bold mb-2">Thank you!</h2>
          <p className="text-lg">We have received your message and will be in touch shortly.</p>
        </div>
      ) : (
        <ContactCenter
          useInvertedBackground={true}
          background={{ variant: "gradient-bars" }}
          tag="Contact Us"
          title="Get a Free Website Mockup"
          description="Ready to get more customers online? Tell us about your business and we'll reach out to schedule a discovery call."
          onSubmit={handleContactSubmit}
        />
      )}
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Loop Web Company"
      copyrightText="© 2025 Loop Web Company. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}