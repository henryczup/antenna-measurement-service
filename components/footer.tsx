"use client"

import { Twitter, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-black border-t border-white/10">
      <div className="max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4 font-sentient">Antenna Measurement Service</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left font-mono">On-demand RF testing for modern innovators</p>
        <div className="flex justify-start items-start gap-3">
          <a href="#" aria-label="Twitter" className="w-4 h-4 flex items-center justify-center">
            <Twitter className="w-full h-full text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="#" aria-label="GitHub" className="w-4 h-4 flex items-center justify-center">
            <Github className="w-full h-full text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-4 h-4 flex items-center justify-center">
            <Linkedin className="w-full h-full text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
      {/* Right Section: Services, Company, Resources */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Services</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <Link href="/#problem" className="text-foreground text-sm font-normal leading-5 hover:underline">
              The Problem
            </Link>
            <Link href="/#solution" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Our Solution
            </Link>
            <Link href="/#why-it-matters" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Benefits
            </Link>
            <Link href="/#contact" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Get a Quote
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Company</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <Link href="/#vision" className="text-foreground text-sm font-normal leading-5 hover:underline">
              About Us
            </Link>
            <Link href="/#contact" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Contact
            </Link>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Careers
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Partners
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Resources</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Documentation
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              FAQ
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Support
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}
