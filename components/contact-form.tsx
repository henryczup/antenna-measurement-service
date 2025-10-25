"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { AnimatedSection } from "./animated-section";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section id="contact" className="relative z-10 py-24 px-6 bg-background overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 top-[-150px]">
          <svg
            className="w-full h-full"
            viewBox="0 0 1388 825"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <mask
              id="mask0_contact_submitted"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="269"
              y="27"
              width="850"
              height="493"
            >
              <rect x="269.215" y="27.4062" width="849.57" height="492.311" fill="url(#paint0_linear_contact_submitted)" />
            </mask>
            <g mask="url(#mask0_contact_submitted)">
              <g filter="url(#filter0_f_contact_submitted)">
                <ellipse
                  cx="694"
                  cy="-93.0414"
                  rx="670.109"
                  ry="354.908"
                  fill="url(#paint1_radial_contact_submitted)"
                  fillOpacity="1"
                />
              </g>
              <ellipse cx="694" cy="-91.5385" rx="670.109" ry="354.908" fill="url(#paint2_linear_contact_submitted)" />
              <ellipse cx="694" cy="-93.0414" rx="670.109" ry="354.908" fill="url(#paint3_linear_contact_submitted)" />
            </g>
            <defs>
              <filter
                id="filter0_f_contact_submitted"
                x="-234.109"
                y="-705.949"
                width="1856.22"
                height="1225.82"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="129" result="effect1_foregroundBlur_contact_submitted" />
              </filter>
              <linearGradient
                id="paint0_linear_contact_submitted"
                x1="1118.79"
                y1="273.562"
                x2="269.215"
                y2="273.562"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="hsl(var(--background))" stopOpacity="0" />
                <stop offset="0.2" stopColor="hsl(var(--background))" stopOpacity="0.8" />
                <stop offset="0.8" stopColor="hsl(var(--background))" stopOpacity="0.8" />
                <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_contact_submitted"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(683.482 245.884) rotate(-3.78676) scale(469.009 248.4)"
              >
                <stop offset="0.05" stopColor="rgba(255, 199, 0, 1)" />
                <stop offset="0.15" stopColor="rgba(255, 199, 0, 0.85)" />
                <stop offset="0.25" stopColor="rgba(255, 199, 0, 0.6)" />
                <stop offset="0.35" stopColor="rgba(255, 199, 0, 0.3)" />
                <stop offset="0.45" stopColor="rgba(255, 199, 0, 0)" />
              </radialGradient>
              <linearGradient
                id="paint2_linear_contact_submitted"
                x1="694"
                y1="-446.446"
                x2="694"
                y2="263.369"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_contact_submitted"
                x1="694"
                y1="-447.949"
                x2="694"
                y2="261.866"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="hsl(var(--background))" />
                <stop offset="1" stopColor="hsl(var(--background))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <AnimatedSection delay={0.25}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-sentient mb-4">Thank You!</h2>
            <p className="text-foreground/60 mb-8">
              We've received your request. We'll be in touch soon with more information about early access.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-transparent border-primary/60 text-primary hover:bg-primary/10"
            >
              Submit Another
            </Button>
          </div>
        </AnimatedSection>
      </section>
    );
  }

  return (
    <section id="contact" className="relative z-10 py-32 px-6 bg-background overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 top-[-150px] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1388 825"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <mask
            id="mask0_contact_form"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="269"
            y="27"
            width="850"
            height="493"
          >
            <rect x="269.215" y="27.4062" width="849.57" height="492.311" fill="url(#paint0_linear_contact_form)" />
          </mask>
          <g mask="url(#mask0_contact_form)">
            <g filter="url(#filter0_f_contact_form)">
              <ellipse
                cx="694"
                cy="-93.0414"
                rx="670.109"
                ry="354.908"
                fill="url(#paint1_radial_contact_form)"
                fillOpacity="1"
              />
            </g>
            <ellipse cx="694" cy="-91.5385" rx="670.109" ry="354.908" fill="url(#paint2_linear_contact_form)" />
            <ellipse cx="694" cy="-93.0414" rx="670.109" ry="354.908" fill="url(#paint3_linear_contact_form)" />
          </g>
          <defs>
            <filter
              id="filter0_f_contact_form"
              x="-234.109"
              y="-705.949"
              width="1856.22"
              height="1225.82"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="129" result="effect1_foregroundBlur_contact_form" />
            </filter>
            <linearGradient
              id="paint0_linear_contact_form"
              x1="1118.79"
              y1="273.562"
              x2="269.215"
              y2="273.562"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--background))" stopOpacity="0" />
              <stop offset="0.2" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="0.8" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_contact_form"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(683.482 245.884) rotate(-3.78676) scale(469.009 248.4)"
            >
              <stop offset="0.05" stopColor="rgba(255, 199, 0, 1)" />
              <stop offset="0.15" stopColor="rgba(255, 199, 0, 0.85)" />
              <stop offset="0.25" stopColor="rgba(255, 199, 0, 0.6)" />
              <stop offset="0.35" stopColor="rgba(255, 199, 0, 0.3)" />
              <stop offset="0.45" stopColor="rgba(255, 199, 0, 0)" />
            </radialGradient>
            <linearGradient
              id="paint2_linear_contact_form"
              x1="694"
              y1="-446.446"
              x2="694"
              y2="263.369"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_contact_form"
              x1="694"
              y1="-447.949"
              x2="694"
              y2="261.866"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--background))" />
              <stop offset="1" stopColor="hsl(var(--background))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <AnimatedSection delay={0.25}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 pt-48 md:pt-48">
            <h2 className="text-4xl md:text-5xl font-sentient mb-4">
              Contact Us to Schedule Your First Test
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john.smith@acme.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your interest in the platform or investment opportunities..."
                rows={6}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1 h-14 text-base">
                Submit
              </Button>
            </div>

            <p className="text-xs text-foreground/60 text-center">
              We respect your privacy and will only contact you about early access and platform updates.
            </p>
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
}
