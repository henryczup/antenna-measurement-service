"use client";

import { DollarSign, Clock, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Expensive Infrastructure",
    description:
      "Turnkey RF/EMC chambers cost hundreds of thousands to over a million dollars, depending on size and frequency range.",
  },
  {
    icon: Clock,
    title: "Continuous Maintenance Costs",
    description:
      "Space, HVAC, absorbers, and calibration add ongoing expenses — even when facilities sit idle for much of the year.",
  },
  {
    icon: TrendingDown,
    title: "Product Cycle Bottlenecks",
    description:
      "High costs create barriers for smaller teams and slow down product development cycles.",
  },
];

export function TheProblem() {
  return (
    <section id="problem" className="relative z-10 py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            The Problem
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-mono">
            Anechoic and OTA test chambers are expensive. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-10 md:p-12 transition duration-300 hover:border-primary/60 hover:bg-white/10"
            >
              <div className="flex flex-col items-center text-center">
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
    </section>
  );
}
