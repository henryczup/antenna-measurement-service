"use client";

import { Upload, Package, Download } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Test Plan",
    description:
      "Define your measurement requirements and specifications.",
  },
  {
    icon: Package,
    title: "Ship Your Device",
    description:
      "Send your prototype to our nearest facility.",
  },
  {
    icon: Download,
    title: "Download Your Results",
    description:
      "Receive calibrated, standardized, and fully reproducible data.",
  },
];

export function WhyItMatters() {
  return (
    <section id="solution" className="relative z-10 py-32 px-6 bg-background">
      <AnimatedSection delay={0.15}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-sentient mb-4">
              Our Solution: A Smarter Way to Test.
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-mono">
              We provide on-demand access to state-of-the-art antenna measurement facilities. It's a simple, pay-as-you-go service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative transition duration-300 hover:border-primary/60"
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
                    <step.icon className="size-6" />
                  </div>
                  <h3 className="text-2xl font-sentient text-white mb-4">{step.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed font-mono">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
