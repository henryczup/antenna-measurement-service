'use client'

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TheProblem } from "@/components/the-problem";
import { WhyItMatters } from "@/components/why-it-matters";
import { Technology } from "@/components/technology";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Gradient Background Effects */}
      <div className="pointer-events-none fixed inset-x-0 top-[-10rem] h-[32rem] opacity-70 z-0">
        <div className="signal-glow absolute left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,199,0,0.28),_transparent_60%)] blur-3xl" />
        <div className="signal-orbit absolute right-[10%] top-1/4 w-[24rem] h-[24rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.25),_transparent_65%)] blur-3xl" />
      </div>
      
      <Hero />
      <TheProblem />
      <WhyItMatters />
      <Technology />
      <ContactForm />
      <Footer />
      <Leva hidden />
    </>
  );
}
