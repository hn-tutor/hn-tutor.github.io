import React from 'react';

export default function HeroSlide({ data, profile }) {
  const isCenter = data.layout === 'hero-center';
  return (
    <div className={`w-full max-w-6xl px-8 ${isCenter ? 'text-center' : 'text-left'}`}>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        {data.primaryTitle}
      </h1>
      <p className="text-xl md:text-2xl text-cyan-tech font-light tracking-wide">
        {data.secondaryTitle}
      </p>
      {isCenter && (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-slate-muted border-t border-white/10 pt-8">
          <div>📍 {profile.contact.address}</div>
          <div>📞 {profile.contact.phone}</div>
          <div>✉️ {profile.contact.email}</div>
          <div>🌐 Facebook Profile</div>
        </div>
      )}
    </div>
  );
}