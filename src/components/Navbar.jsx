import React from 'react';

export default function Navbar({ profile }) {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center background rgba(8, 11, 16, 0.6) backdrop-blur-md border-b border-white/5 font-jakarta">
      <div className="text-white font-bold tracking-tight">{profile.name}</div>
      <div className="text-slate-muted text-sm tracking-wide uppercase">{profile.role}</div>
    </nav>
  );
}