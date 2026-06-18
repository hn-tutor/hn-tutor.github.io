import React from 'react';

export default function SplitsSlide({ data }) {
  // Tự động đảo bên Layout Zig-zag dựa trên id của Slide
  const isInverted = data.id === 'edu-high' || data.id === 'values';
  return (
    <div className={`w-full max-w-6xl px-8 flex flex-col md:flex-row gap-12 items-center ${isInverted ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2">
        <span className="text-xs font-semibold tracking-widest text-indigo-premium uppercase bg-indigo-premium/10 px-3 py-1 rounded-full border border-indigo-premium/20">{data.primaryTitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-4 leading-tight">{data.secondaryTitle}</h2>
      </div>
      <div className="w-full md:w-1/2 p-8 rounded-2xl bg-cyber-gradient border border-white/5 box-shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <p className="text-lg text-slate-muted leading-relaxed font-inter">{data.body}</p>
        {data.highlights && (
          <div className="mt-6 flex flex-wrap gap-2">
            {data.highlights.map((h, i) => (
              <span key={i} className="text-xs text-cyan-tech bg-cyan-tech/10 border border-cyan-tech/20 px-3 py-1 rounded-md">{h}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}