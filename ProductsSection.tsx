'use client';
import React, { useRef, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Product {
  tag: string;
  title: string;
  desc: string;
  spec: string;
  icon: 'Square2StackIcon' | 'ArrowPathIcon' | 'InboxStackIcon' | 'BuildingOffice2Icon';
  img: string;
  alt: string;
  grades: string[];
}

const products: Product[] = [
{
  tag: 'SS-FLAT-01',
  title: 'Sheets & Plates',
  desc: 'Hot rolled and cold rolled stainless steel sheets in Grade 304, 316L, 202, and 430. Mirror, BA, 2B, and No.4 finishes available.',
  spec: 'Thickness: 0.3mm – 100mm',
  icon: 'Square2StackIcon',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_13a4de1cd-1766860949463.png",
  alt: 'Stainless steel sheets stacked in industrial warehouse, metallic silver surface, dark background',
  grades: ['Gr. 304', 'Gr. 316L', 'Gr. 202']
},
{
  tag: 'SS-COIL-02',
  title: 'Coils & Strips',
  desc: 'Jindal and prime-brand stainless steel coils including mirror finish, HR, and CR strips for stamping, forming, and fabrication.',
  spec: 'Width: 10mm – 1500mm',
  icon: 'ArrowPathIcon',
  img: "https://images.unsplash.com/photo-1697698532634-ea59b636ccea",
  alt: 'Steel coil rolls in manufacturing facility, dim industrial lighting, heavy metallic cylinders',
  grades: ['Mirror', 'HR Coil', 'CR Strip']
},
{
  tag: 'SS-PIPE-03',
  title: 'Pipes & Tubes',
  desc: 'Round, square, and rectangular stainless steel pipes for plumbing, structural, and industrial applications across all major grades.',
  spec: 'OD: 6mm – 600mm',
  icon: 'InboxStackIcon',
  img: "https://images.unsplash.com/photo-1699322039731-fdc996a9bb1c",
  alt: 'Stainless steel pipes bundled together in warehouse, circular cross sections, dark industrial setting',
  grades: ['Round', 'Square', 'Rectangular']
},
{
  tag: 'SS-BULK-04',
  title: 'Industrial Orders',
  desc: 'Bulk supply for OEMs, fabricators, and construction projects. Custom cutting, slitting, and polishing services on request.',
  spec: 'Min. Order: 1 MT+',
  icon: 'BuildingOffice2Icon',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1695b47f4-1776754868570.png",
  alt: 'Large industrial warehouse with stacked steel inventory, dramatic shadows, high ceiling, dim lighting',
  grades: ['Custom Cut', 'Polishing', 'Slitting']
}];


function ProductCard({ product, index }: {product: Product;index: number;}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.left = `${x}px`;
    glowRef.current.style.top = `${y}px`;
    glowRef.current.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = '0';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`reveal-section glow-card relative overflow-hidden rounded-2xl bg-card border border-border flex flex-col delay-${(index + 1) * 100}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="product-glow-overlay"
        aria-hidden="true" />
      

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={product.img}
          alt={product.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        {/* Tag */}
        <span className="absolute top-3 left-3 font-mono text-xs text-primary/80 bg-background/70 backdrop-blur-sm px-2.5 py-1 rounded border border-primary/20">
          {product.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-xl font-semibold text-foreground italic">
            {product.title}
          </h3>
          <div className="shrink-0 w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center">
            <Icon name={product.icon} size={18} className="text-primary" />
          </div>
        </div>

        <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4 flex-1">
          {product.desc}
        </p>

        {/* Spec */}
        <div className="font-mono text-xs text-primary/70 mb-4 border-t border-border/50 pt-3">
          {product.spec}
        </div>

        {/* Grade pills */}
        <div className="flex flex-wrap gap-2">
          {product.grades.map((g) =>
          <span
            key={g}
            className="font-mono text-xs px-2.5 py-1 rounded border border-border/80 text-muted-foreground bg-muted/50">
            
              {g}
            </span>
          )}
        </div>
      </div>

      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>);

}

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    const targets = sectionRef.current?.querySelectorAll('.reveal-section');
    targets?.forEach((el) => observer.observe(el));
    if (headingRef.current) observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative bg-background py-24 md:py-32 px-6 md:px-12 diamond-plate">
      
      {/* Section watermark */}
      <div
        className="absolute top-8 left-6 md:left-12 font-display font-black text-foreground/[0.03] pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
        aria-hidden="true">
        
        PRODUCTS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal-section mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-4">
            Our Product Range
          </span>
          <h2 className="font-display font-black italic leading-none tracking-tight text-foreground" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Grade-Certified<br />
            <span className="text-shimmer">Steel Supply.</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl font-light">
            Every product sourced from Jindal Stainless and SAIL-certified mills. Consistent quality, competitive pricing, and same-day availability.
          </p>
        </div>

        {/* 4-card grid — 2×2 */}
        {/* BENTO AUDIT:
             Row 1: [col-1: Sheets & Plates cs-1] [col-2: Coils & Strips cs-1]
             Row 2: [col-1: Pipes & Tubes cs-1]   [col-2: Industrial Orders cs-1]
             Placed 4/4 ✓
          */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {products.map((p, i) =>
          <ProductCard key={p.tag} product={p} index={i} />
          )}
        </div>
      </div>
    </section>);

}
