"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We sunset our internal chamber after three quarters on the platform. Campaigns that once stalled waiting for fixture time now auto-schedule overnight.",
    author: "Lena Moritz",
    role: "Director, RF Systems",
    company: "Helios Mobile",
  },
  {
    quote:
      "Their API drops calibrated TRP/TIS data straight into our CI dashboards. We release firmware updates with RF regression baked into every build.",
    author: "Akshay Rao",
    role: "Head of Wireless Engineering",
    company: "SenseGrid IoT",
  },
  {
    quote:
      "The distributed node network absorbed our certification sprint without delays. Diagnostics flagged coexistence issues before we stepped into carrier labs.",
    author: "Prof. Natalie Reyes",
    role: "Principal Investigator",
    company: "CoLab Research",
  },
];

const partners = [
  "ISO/IEC 17025 Accredited",
  "CTIA Authorized Test Lab",
  "3GPP FR2 Ready",
  "SOC 2 Type II In Progress",
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            Trusted by RF Engineers
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Trusted for commercialization programs, certification sprints, and research breakthroughs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card relative"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground/80 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
                <p className="text-sm text-foreground/60">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-12">
          <p className="text-center text-sm text-foreground/60 mb-6">
            Certifications & Memberships
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg bg-muted/50 text-foreground/70 font-mono text-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
