"use client";

import { DollarSign, Clock, TrendingDown } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const problems = [
  {
    icon: DollarSign,
    title: "High Capital Cost",
    description:
      "Buy a $1M+ chamber that sits unused.",
  },
  {
    icon: Clock,
    title: "Long Delays",
    description:
      "Wait weeks for an open slot at a contract lab.",
  },
  {
    icon: TrendingDown,
    title: "Wasted Resources",
    description:
      "High fixed costs for a capability you only need periodically.",
  },
];

export function TheProblem() {
  return (
    <section id="problem" className="relative z-10 py-32 px-6 bg-background">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            Rethink Antenna Measurement
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative transition duration-300 hover:border-destructive/60"
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
                <div className="flex size-12 items-center justify-center rounded-2xl bg-destructive/20 text-destructive mb-6">
                  <problem.icon className="size-6" />
                </div>
                <h3 className="text-2xl font-sentient text-white mb-4">{problem.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed font-mono">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
