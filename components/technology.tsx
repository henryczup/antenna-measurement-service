"use client";

import { Clock, DollarSign, Database } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Faster time-to-market",
    description:
      "Skip procurement, setup, and staffing. Get your testing done quickly without the overhead of building your own infrastructure.",
  },
  {
    icon: DollarSign,
    title: "Lower cost",
    description:
      "Pay for usage, not idle infrastructure. Eliminate the capital expense of owning and maintaining chambers that sit unused most of the time.",
  },
  {
    icon: Database,
    title: "Data-driven insights",
    description:
      "Standardized measurements enable AI-based optimization over time. The global anechoic-chamber market could exceed $1.5B by 2025, driven by 5G and connected-device testing demand.",
  },
];

export function Technology() {
  return (
    <section id="why-it-matters" className="relative z-10 py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            Why It Matters
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-mono">
            Transform how you approach antenna testing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-10 md:p-12 transition duration-300 hover:border-primary/60 hover:bg-white/10"
            >
              <div className="flex flex-col items-center text-center">
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
    </section>
  );
}
