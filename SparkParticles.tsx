'use client';
import React, { useMemo } from 'react';

interface Spark {
  id: number;
  left: string;
  size: number;
  dur: string;
  delay: string;
  x: string;
  color: string;
}

export default function SparkParticles() {
  const sparks: Spark[] = useMemo(() => {
    const colors = [
      'rgba(200,150,90,0.9)',
      'rgba(232,184,122,0.8)',
      'rgba(255,220,140,0.7)',
      'rgba(255,160,60,0.6)',
      'rgba(255,240,180,0.5)',
    ];
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${(i * 3.7 + 2) % 96}%`,
      size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
      dur: `${3.5 + (i % 7) * 0.7}s`,
      delay: `${(i * 0.35) % 4}s`,
      x: `${((i % 5) - 2) * 30}px`,
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {sparks.map((s) => (
        <div
          key={s.id}
          className="spark-particle"
          style={
            {
              left: s.left,
              bottom: '-4px',
              width: `${s.size}px`,
              height: `${s.size * 2.5}px`,
              background: s.color,
              boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
              '--spark-dur': s.dur,
              '--spark-delay': s.delay,
              '--spark-x': s.x,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
