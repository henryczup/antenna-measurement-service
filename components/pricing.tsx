"use client";

import { Check } from "lucide-react";
import { Button } from "./ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$3,500",
    period: "per campaign",
    description: "For teams validating a new SKU or running targeted regression sweeps",
    features: [
      "Up to 3 devices-in-test",
      "Guaranteed 7-day turnaround",
      "TRP/TIS & radiation pattern bundles",
      "Certified compliance report",
      "Secure dashboard delivery",
      "Email & chat support",
    ],
    cta: "Request Quote",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$12,500",
    period: "per month",
    description: "Elastic measurement capacity for product lines moving toward launch",
    features: [
      "Up to 20 devices per month",
      "Priority 3-day turnaround",
      "MPAC + channel emulation workflows",
      "Automation-ready API access",
      "Dedicated RF program manager",
      "Quarterly uncertainty audits",
      "CI pipeline integrations",
      "Capacity pooling across regions",
    ],
    cta: "Book a Demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual platform",
    description: "Reserved nodes and co-engineered automation for global device portfolios",
    features: [
      "Dedicated multi-node capacity",
      "24-hour certification sprint lanes",
      "Private fixtures & secure cages",
      "Custom analytics & AI diagnostics",
      "Joint roadmap reviews",
      "Enterprise SOC 2 documentation",
      "On-site resident engineers",
      "Co-developed inverse design workflows",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Predictable costs that scale with your testing needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border bg-card relative ${
                tier.highlighted
                  ? "ring-2 ring-primary shadow-xl scale-105"
                  : ""
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-foreground/60 text-sm">{tier.period}</span>
                </div>
                <p className="text-sm text-foreground/60">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.highlighted
                    ? ""
                    : "bg-transparent border-primary/60 text-primary hover:bg-primary/10"
                }`}
                asChild
              >
                <a href="#contact">{tier.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-foreground/60">
            All subscriptions include managed calibration, encrypted data retention, and access to historical datasets for benchmarking.
            <br />
            Academic and research labs receive preferred pricing on annual commitments.
          </p>
        </div>
      </div>
    </section>
  );
}
