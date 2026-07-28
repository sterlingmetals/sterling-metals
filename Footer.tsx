import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo + name */}
        <div className="flex items-center gap-2.5">
          <AppLogo size={28} />
          <span className="font-display font-semibold italic text-foreground/70 text-sm hidden sm:block">
            Sterling Metals
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground font-sans font-medium">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          <a href="tel:+919932121000" className="hover:text-primary transition-colors">099321 21000</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground font-mono">
          © 2026 Sterling Metals · Delhi
        </p>
      </div>
    </footer>
  );
}
