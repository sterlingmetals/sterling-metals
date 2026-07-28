import React from 'react';

export default function GridLinesOverlay() {
  return (
    <div className="grid-lines-overlay" aria-hidden="true">
      <div className="grid-line-v" />
      <div className="grid-line-v hidden md:block" />
      <div className="grid-line-v hidden md:block" />
      <div className="grid-line-v" />
    </div>
  );
}
