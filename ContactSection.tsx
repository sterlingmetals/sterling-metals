'use client';
import React, { useRef, useEffect, useCallback } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon,  } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const targets = sectionRef.current?.querySelectorAll('.reveal-section');
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 3D tilt on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.01)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  }, []);

  // Magnetic + ripple for buttons
  const handleBtnMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  }, []);

  const handleBtnMouseLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translate(0,0)';
  }, []);

  const handleBtnClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }, []);

  const details = [
    {
      icon: <MapPinIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
      label: 'Address',
      value: 'Plot No-24, GT Karnal Rd, Rajasthan Udyog Nagar, Jahangirpuri, Delhi 110033',
    },
    {
      icon: <PhoneIcon className="w-5 h-5 text-primary shrink-0" />,
      label: 'Phone',
      value: '099321 21000',
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-primary shrink-0" />,
      label: 'Hours',
      value: 'Open 24 Hours, 7 Days a Week',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-background py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--primary) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <div className="reveal-section text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-4">
            Find Us
          </span>
          <h2
            className="font-display font-black italic leading-none tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
          >
            Visit Our <span className="text-shimmer">Steel Yard</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg font-light max-w-lg mx-auto">
            Walk in or call ahead — we&apos;re open round the clock to serve industrial buyers.
          </p>
        </div>

        {/* Riveted Metal Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="reveal-section tilt-card relative rounded-2xl border border-border bg-card metal-texture overflow-hidden"
          style={{ transition: 'transform 0.15s ease-out', boxShadow: '0 0 0 1px rgba(200,150,90,0.15), 0 32px 80px rgba(0,0,0,0.5)' }}
        >
          {/* Rivet corners */}
          <div className="absolute top-4 left-4 rivet z-10" aria-hidden="true" />
          <div className="absolute top-4 right-4 rivet z-10" aria-hidden="true" />
          <div className="absolute bottom-4 left-4 rivet z-10" aria-hidden="true" />
          <div className="absolute bottom-4 right-4 rivet z-10" aria-hidden="true" />

          {/* Top amber rule */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="p-8 md:p-12">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border/60">
              <div>
                <h3 className="font-display text-2xl font-bold italic text-foreground">Sterling Metals</h3>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  Stainless Steel Distributor · Est. 2019
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <StarIcon key={s} className="w-4 h-4 text-primary" />
                  ))}
                </div>
                <span className="font-mono text-sm text-foreground">5.0</span>
                <span className="font-mono text-xs text-muted-foreground">(4)</span>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-5 mb-8">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-0.5">
                      {d.label}
                    </span>
                    <span className="font-sans text-sm text-foreground font-medium">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Live indicator */}
            <div className="flex items-center gap-2.5 mb-8 p-3 rounded-xl bg-muted/50 border border-border/50">
              <span className="live-dot w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />
              <span className="font-mono text-xs text-foreground/70 uppercase tracking-widest">
                Currently Open — 24 Hours · 7 Days
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=Plot+No-24,+GT+Karnal+Rd,+Rajasthan+Udyog+Nagar,+Jahangirpuri,+Delhi+110033"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                onClick={handleBtnClick}
                className="magnetic-btn flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm relative overflow-hidden transition-all duration-300 hover:bg-accent"
              >
                <MapPinIcon className="w-4 h-4 shrink-0" />
                Open in Maps
              </a>
              <a
                href="tel:+919932121000"
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                onClick={handleBtnClick}
                className="magnetic-btn flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-primary/50 text-foreground font-sans font-semibold text-sm relative overflow-hidden transition-all duration-300 hover:border-primary hover:bg-primary/10"
              >
                <PhoneIcon className="w-4 h-4 shrink-0 text-primary" />
                Call Now
              </a>
            </div>
          </div>

          {/* Bottom amber rule */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
