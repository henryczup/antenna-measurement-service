"use client";

import { Network, Users, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Network,
    title: "Standardized test nodes operated by experts",
    description:
      "Access professional-grade measurement infrastructure without the capital investment.",
  },
  {
    icon: BarChart3,
    title: "Calibrated S-parameters, radiation patterns, and compliance reports",
    description:
      "Receive comprehensive, calibrated test results and documentation for your products.",
  },
  {
    icon: Users,
    title: "APIs and dashboards for automated, reproducible workflows",
    description:
      "Rent capacity by the hour or project — reducing cost and improving turnaround instead of owning a multimillion-dollar facility.",
  },
];

export function WhyItMatters() {
  return (
    <section id="solution" className="relative z-10 py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            The Solution
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-mono">
            A shared, on-demand measurement network that delivers:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-10 md:p-12 transition duration-300 hover:border-primary/60 hover:bg-white/10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/20 text-primary mb-6">
                  <solution.icon className="size-6" />
                </div>
                <h3 className="text-2xl font-sentient text-white mb-4">{solution.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed font-mono">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
