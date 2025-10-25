"use client";

import { Zap, DollarSign, Radio, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const benefits = [
  {
    icon: Zap,
    title: "Move Faster",
    description:
      "Get measurement data in days, not months. Integrate testing into your design cycle with our simple API.",
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description:
      "No capital investment. Convert high fixed costs into a predictable operational expense.",
  },
  {
    icon: ShieldCheck,
    title: "Test with Confidence",
    description:
      "Get calibrated, standardized, and fully reproducible results every time.",
  },
];

export function Technology() {
  return (
    <section id="why-it-matters" className="relative z-10 py-32 px-6 bg-background">
      <AnimatedSection delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-sentient mb-4">
              Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative"
              >
                {/* Background with blur effect */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "rgba(231, 236, 235, 0.08)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                  }}
                />
                {/* Additional subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                
                <div className="self-stretch p-10 md:p-12 flex flex-col items-center text-center relative z-10">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/20 text-primary mb-6">
                    <benefit.icon className="size-6" />
                  </div>
                  <h3 className="text-2xl font-sentient text-white mb-4">{benefit.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed font-mono">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
