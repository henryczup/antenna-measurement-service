"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex flex-col h-svh justify-between relative">
      <GL hovering={hovering} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_70%,rgba(0,0,0,0.3)_73%,rgba(0,0,0,0.7)_77%,rgb(0,0,0)_82%,rgb(0,0,0)_100%)] pointer-events-none z-[5]" />

      <div className="pb-16 mt-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Reimagining Antenna Testing <br />
          <i className="font-light">for the Cloud Era</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[640px] mx-auto">
          Access professional-grade RF measurements without owning a chamber.
          Upload your configuration, ship your prototype, and receive calibrated results online.
        </p>

        <div className="flex gap-4 justify-center mt-14 max-sm:flex-col max-sm:items-center">
          <Link className="contents max-sm:hidden" href="/#contact">
            <Button
              className="h-16 px-8 text-base"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Join the Waitlist
            </Button>
          </Link>
          <Link className="contents max-sm:hidden" href="/#contact">
            <Button className="h-16 px-8 text-base bg-transparent border-primary/60 text-primary hover:bg-primary/10">
              Contact Us
            </Button>
          </Link>
          <Link className="contents sm:hidden" href="/#contact">
            <Button
              size="sm"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Join the Waitlist
            </Button>
          </Link>
          <Link className="contents sm:hidden" href="/#contact">
            <Button size="sm" className="bg-transparent border-primary/60 text-primary hover:bg-primary/10">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
