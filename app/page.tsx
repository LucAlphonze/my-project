'use client'

import Features from "@/components/features-3";
import HeroSection from "@/components/hero-section-5";
import CompanyHistory from "@/components/company-history";
import ContactSection from "@/components/contact-section";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLElement>(null);
  return <div>
    <HeroSection onClick={() => targetRef.current?.scrollIntoView({ behavior: "smooth" })}/>  
    <Features ref={targetRef}/> 
    <CompanyHistory />
    <ContactSection />
  </div>
}