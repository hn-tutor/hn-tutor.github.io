import React from 'react';

export default function BentoMetrics({ data }) {
  return (
    <div className="w-full max-w-6xl px-8">
      <div className="mb-8">
        <span className="text-xs font-semibold tracking-widest text-cyan-tech uppercase bg-cyan-tech/10 px-3 py-1 rounded-full border border-cyan-tech/20">{data.primaryTitle}</span>
        <h2 className="text-3xl font-bold text-white mt-2">{data.secondaryTitle}</h2>
      </div>

      {/* Ô ô Bento sắp xếp linh hoạt theo cấu trúc dữ liệu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.id === 'metrics' && data.metrics?.map((m, i) => (
          <div key={i} className={`p-8 rounded-2xl bg-cyber-gradient border border-white/5 ${i === 0 ? 'md:col-span-2' : ''} flex flex-col justify-between`}>
            <span className="text-sm text-slate-muted tracking-wide">{m.label}</span>
            <span className="text-5xl md:text-6xl font-bold text-white mt-6 text-shadow-[0_0_20px_rgba(0,229,255,0.2)]">{m.value}</span>
          </div>
        ))}

        {data.id === 'skills' && (
          <div className="md:col-span-3 p-8 rounded-2xl bg-cyber-gradient border border-white/5">
            <p className="text-2xl font-light text-slate-muted leading-relaxed italic">"{data.body}"</p>
          </div>
        )}

        {data.id === 'roadmap' && data.sections && (
          <>
            <div className="p-6 rounded-2xl bg-cyber-gradient border border-white/5">
              <h4 className="text-sm text-cyan-tech font-bold uppercase mb-4">🎯 Đối tượng</h4>
              <ul className="space-y-2 text-slate-muted text-sm">{data.sections.target.map((t, i) => <li key={i}>• {t}</li>)}</ul>
            </div>
            <div className="p-6 rounded-2xl bg-cyber-gradient border border-white/5">
              <h4 className="text-sm text-indigo-premium font-bold uppercase mb-4">⏰ Hình thức & Thời gian</h4>
              <p className="text-slate-muted text-sm leading-relaxed">{data.sections.method}</p>
            </div>
            <div className="p-6 rounded-2xl bg-cyber-gradient border border-white/5">
              <h4 className="text-sm text-cyan-tech font-bold uppercase mb-4">🤝 Cam kết vàng</h4>
              <ul className="space-y-2 text-slate-muted text-sm">{data.sections.commitments.map((c, i) => <li key={i}>✓ {c}</li>)}</ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}