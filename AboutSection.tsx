'use client';
import React, { useRef, useEffect, useState } from 'react';
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import AppImage from '@/components/ui/AppImage';

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(parseFloat(start.toFixed(1)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return value;
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (!active) setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const targets = sectionRef.current?.querySelectorAll('.reveal-section');
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  const rating = useCountUp(5.0, 1800, active);

  const highlights = [
  'Jindal Stainless & SAIL-certified stock',
  'Grade 202, 304, 316L, 430 available',
  'Custom cutting & polishing services',
  '24-hour dispatch across Delhi NCR',
  'Partnership firm, MSME registered'];


  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-secondary py-24 md:py-32 px-6 md:px-12 overflow-hidden metal-texture">
      
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
        aria-hidden="true" />
      

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="reveal-section">
          <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-4">
            About Sterling Metals
          </span>
          <h2
            className="font-display font-black italic leading-none tracking-tight text-foreground mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
            
            Built on Steel,<br />
            <span className="text-shimmer">Forged on Trust.</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg font-light leading-relaxed mb-6">
            Founded in 2019 by S. Aggarwal, Sterling Metals has grown into one of Delhi&apos;s most reliable stainless steel distributors. Operating from our 24-hour facility at GT Karnal Road, we serve fabricators, OEMs, and construction firms across the NCR with consistent grade-certified material.
          </p>
          <p className="text-muted-foreground font-sans text-base font-light leading-relaxed mb-8">
            With an annual turnover of ₹25–100 Crore and a reputation built on zero-compromise quality, we stock flat-rolled products, round pipes, coils, and custom-processed steel to meet industrial-scale demand.
          </p>

          {/* Highlights */}
          <ul className="space-y-3 stagger-children">
            {highlights.map((h) =>
            <li key={h} className="flex items-start gap-3 font-sans text-sm text-foreground/80">
                <CheckBadgeIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {h}
              </li>
            )}
          </ul>
        </div>

        {/* Right: Rating card + image */}
        <div className="reveal-section delay-200 flex flex-col gap-6">
          {/* Image */}
          <div className="relative h-56 rounded-2xl overflow-hidden border border-border">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1be73c795-1768403083307.png"
              alt="Steel warehouse interior, bright fluorescent lights, organized metal inventory rows, clean industrial facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            <div className="absolute bottom-4 left-4 font-mono text-xs text-primary/80 uppercase tracking-widest">
              Jahangirpuri Facility · Delhi
            </div>
          </div>

          {/* Rating card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 amber-glow-border">
            <div className="shimmer-sweep absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none z-0" />
            <div className="relative z-10">
              <div className="flex items-end gap-4 mb-4">
                <span className="font-display font-black italic text-foreground count-number" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1 }}>
                  {rating.toFixed(1)}
                </span>
                <div className="pb-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) =>
                    <StarIcon key={s} className="w-5 h-5 text-primary star-glow" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    Google Rating
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground font-sans text-sm font-light border-t border-border/50 pt-4">
                Based on 4 verified Google reviews from industrial clients across Delhi NCR.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {['Quality', 'Delivery', 'Service'].map((label) =>
                <div key={label} className="text-center p-2 rounded-lg bg-muted/50 border border-border/50">
                    <span className="block font-display text-lg font-bold text-foreground italic">5.0</span>
                    <span className="font-mono text-xs text-muted-foreground">{label}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
