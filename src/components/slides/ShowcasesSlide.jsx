import React from 'react';

export default function ShowcasesSlide({ data }) {
  return (
    <div className="w-full max-w-6xl px-8">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-widest text-indigo-premium uppercase bg-indigo-premium/10 px-3 py-1 rounded-full border border-indigo-premium/20">{data.primaryTitle}</span>
        <h2 className="text-3xl font-bold text-white mt-2">{data.secondaryTitle}</h2>
      </div>

      {/* Trục dòng thời gian giải thưởng Adaptive hàng ngang */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.items?.map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-cyber-gradient border border-white/5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:border-indigo-premium/30">
            <span className="text-xs font-bold text-indigo-premium uppercase tracking-widest">{item.year}</span>
            <p className="text-white font-medium mt-4 text-sm leading-snug">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}