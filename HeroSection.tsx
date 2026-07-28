'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';
import SparkParticles from './SparkParticles';
import { PhoneIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden"
      style={{ minHeight: '100svh' }}>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-background">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_129cc7bf0-1776264026770.png"
          alt="Stainless steel industrial manufacturing floor, dramatic low-key lighting, dark steel walls, dim atmospheric warehouse, deep shadows and metallic reflections"
          fill
          priority
          className="object-cover object-center animate-cinematic opacity-0"
          sizes="100vw" />
        
        {/* Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
      </div>
      {/* Spark Particles */}
      <SparkParticles />
      {/* Floating status badge */}
      <div
        className="absolute top-28 right-6 md:right-14 z-20 opacity-0 animate-slide-up hero-delay-5"
        aria-label="Live status">
        
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border">
          <span className="live-dot w-2 h-2 rounded-full bg-green-500 shrink-0" />
          <span className="font-mono text-xs tracking-wider uppercase text-foreground/80">
            Open 24 Hours
          </span>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

        {/* Left: Headline */}
        <div className="md:col-span-7">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-slide-up hero-delay-1">
            <span className="h-px w-8 bg-primary/70" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Est. 2019 · Delhi, India
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-display font-black leading-none tracking-tight">
            <span
              className="block text-foreground opacity-0 animate-slide-up hero-delay-2"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
              
              STERLING
            </span>
            <span
              className="block opacity-0 animate-slide-up hero-delay-3"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
              
              <span className="text-shimmer">METALS</span>
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="mt-5 text-lg md:text-xl text-foreground/70 font-sans font-light leading-relaxed max-w-xl opacity-0 animate-slide-up hero-delay-4">
            
            Delhi&apos;s most trusted stainless steel distributor — Grade 304, 316 &amp; 202 sheets, coils, pipes, and structural sections. Industrial-grade quality, dispatched in 24 hours.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8 opacity-0 animate-slide-up hero-delay-5">
            <a
              href="https://maps.google.com/?q=Plot+No-24,+GT+Karnal+Rd,+Rajasthan+Udyog+Nagar,+Jahangirpuri,+Delhi+110033"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm relative overflow-hidden">
              
              <MapPinIcon className="w-4 h-4 shrink-0" />
              Get Directions
              <ArrowRightIcon className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="tel:+919932121000"
              className="magnetic-btn group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground font-sans font-semibold text-sm hover:border-primary/60 transition-colors duration-300 relative overflow-hidden">
              
              <PhoneIcon className="w-4 h-4 shrink-0 text-primary" />
              099321 21000
            </a>
          </div>
        </div>

        {/* Right: Stats Glassmorphism Card */}
        <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end pb-2">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl p-6 md:p-8 amber-glow-border opacity-0 animate-slide-up hero-delay-4">
            {/* Shimmer sweep */}
            <div className="shimmer-sweep absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none z-0" />

            <div className="relative z-10">
              {/* Rating row */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5]?.map((s) =>
                  <StarIcon key={s} className="w-4 h-4 text-primary star-glow" />
                  )}
                </div>
                <span className="font-mono text-sm text-foreground font-medium">5.0</span>
                <span className="text-muted-foreground text-xs font-sans ml-1">/ 4 Google Reviews</span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-border/50 pt-5 mb-5">
                <div>
                  <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Turnover</span>
                  <span className="font-display text-2xl font-bold text-foreground italic">₹25–100Cr</span>
                </div>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Experience</span>
                  <span className="font-display text-2xl font-bold text-foreground italic">6+ Yrs</span>
                </div>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Products</span>
                  <span className="font-display text-2xl font-bold text-foreground italic">12+ Grades</span>
                </div>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Dispatch</span>
                  <span className="font-display text-2xl font-bold text-primary italic">24 Hours</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-muted-foreground text-xs font-sans border-t border-border/50 pt-4">
                <MapPinIcon className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
                <span>Plot No-24, GT Karnal Rd, Rajasthan Udyog Nagar, Jahangirpuri, Delhi 110033</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-slide-up hero-delay-5 z-20">
        <span className="font-mono text-xs uppercase tracking-widest text-foreground/30">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>);

}
