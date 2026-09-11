'use client'

import Features from "@/components/features-3";
import HeroSection from "@/components/hero-section-5";
import StatsSection from "@/components/stats-1";
import StatsSection2 from "@/components/stats2";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLElement>(null);
  return <div>
    <HeroSection onClick={() => targetRef.current?.scrollIntoView({ behavior: "smooth" })}/>  
    <Features ref={targetRef}/> 
    <StatsSection/>
    <StatsSection2/>
    <StatsSection/>
    <StatsSection2/>
  </div>
}