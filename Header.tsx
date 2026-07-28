'use client';
import React, { useState, useEffect, useCallback } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleScrollClose = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (mobileOpen) {
      window.addEventListener('scroll', handleScrollClose, { passive: true });
      return () => window.removeEventListener('scroll', handleScrollClose);
    }
  }, [mobileOpen, handleScrollClose]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <AppLogo size={36} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <span className="font-display font-bold text-lg italic text-foreground tracking-tight hidden sm:block">
              Sterling Metals
            </span>
            {/* Rotating diamond mark */}
            <div
              className="rotate-diamond w-3 h-3 bg-primary hidden sm:block"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
              aria-hidden="true"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="nav-link font-sans text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {link?.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="tel:+919932121000"
              className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm transition-all duration-300 hover:bg-accent relative overflow-hidden"
            >
              <PhoneIcon className="w-4 h-4 shrink-0" />
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-20 px-6 md:hidden">
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl font-bold italic text-foreground/80 hover:text-foreground transition-colors border-b border-border/30 pb-4"
              >
                {link?.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+919932121000"
            className="mt-10 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-base"
            onClick={() => setMobileOpen(false)}
          >
            <PhoneIcon className="w-5 h-5" />
            099321 21000
          </a>
        </div>
      )}
    </>
  );
}
