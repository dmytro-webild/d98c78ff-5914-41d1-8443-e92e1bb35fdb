"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Layout, Search, Target } from "lucide-react";

export default function LandingPage() {
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
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Portfolio",          id: "portfolio"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Loop Web"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars"}}
      title="More Customers. Better Websites. Built for Local Businesses."
      description="Loop Web Company helps small businesses get more calls, bookings, and visibility online. Get a high-converting website that works as hard as you do."
      testimonials={[
        {
          name: "Sarah Miller",          handle: "@miller-barber",          testimonial: "My bookings tripled after Loop Web built my site.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-businessman-showing-thumb-up_1262-3024.jpg"},
        {
          name: "John Davis",          handle: "@jd-contracting",          testimonial: "Finally, a website that actually generates leads for my business.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg"},
        {
          name: "Elena Rodriguez",          handle: "@elena-bistro",          testimonial: "Professional and fast, they delivered exactly what I needed.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081913.jpg"},
        {
          name: "Mark Wilson",          handle: "@mw-fitness",          testimonial: "The growth in my gym's traffic has been incredible.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-man-pointing-camera-with-finger_1262-3118.jpg"},
        {
          name: "Sam Taylor",          handle: "@taylor-designs",          testimonial: "An absolute pleasure working with the team at Loop Web.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg"},
      ]}
      buttons={[
        {
          text: "Get a Free Website Mockup",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-network-communications-background-with-low-poly-plexus-design_1048-13853.jpg"
      imageAlt="tech abstract blue background"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg",          alt: "Positive confident businessman posing outside"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",          alt: "Close-up of businessman with tie"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",          alt: "Happy young professional posing in office"},
        {
          src: "http://img.b2bpic.net/free-photo/crazy-businessman-worried-expression_1194-3826.jpg",          alt: "crazy businessman worried expression"},
        {
          src: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3800.jpg",          alt: "blond businessman happy expression"},
      ]}
      avatarText="Trusted by 500+ local businesses"
      marqueeItems={[
        {
          type: "text",          text: "High Conversion"},
        {
          type: "text",          text: "Local SEO"},
        {
          type: "text",          text: "Mobile Responsive"},
        {
          type: "text",          text: "Lightning Fast"},
        {
          type: "text",          text: "Lead Focused"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Layout,
          title: "Website Design",          description: "Custom, mobile-friendly websites that showcase your business professionally."},
        {
          icon: Search,
          title: "SEO Setup",          description: "Local SEO strategies to help you get found by customers in your area."},
        {
          icon: Target,
          title: "Lead Gen Optimization",          description: "High-conversion elements strategically designed to increase calls and bookings."},
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
        {
          id: "1",          value: "01",          title: "Contact Us",          items: [
            "Book your free discovery call and tell us about your goals."],
        },
        {
          id: "2",          value: "02",          title: "We Design",          items: [
            "We build a custom, high-converting website mockup for your review."],
        },
        {
          id: "3",          value: "03",          title: "More Customers",          items: [
            "Launch your site and watch the calls, bookings, and visibility grow."],
        },
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
        {
          id: "f1",          title: "How long does a website take?",          content: "Most projects are completed in 2-4 weeks depending on scope."},
        {
          id: "f2",          title: "Do you provide SEO?",          content: "Yes, we integrate local SEO strategies for every site we build."},
        {
          id: "f3",          title: "Can I edit my site later?",          content: "Yes, we build sites using user-friendly platforms so you can easily make updates."},
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
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
      tag="Contact Us"
      title="Get a Free Website Mockup"
      description="Ready to get more customers online? Tell us about your business and we'll reach out to schedule a discovery call."
    />
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