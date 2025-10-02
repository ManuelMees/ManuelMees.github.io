import React from 'react';

export default function Logo() {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0">
        {/* Outer circle with dots */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#0066cc"
            strokeWidth="2"
            className="transform-origin-center"
          />
          {/* Decorative dots */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <circle
              key={i}
              cx={50 + Math.cos((angle * Math.PI) / 180) * 45}
              cy={50 + Math.sin((angle * Math.PI) / 180) * 45}
              r="2"
              fill="#0066cc"
            />
          ))}
        </svg>
      </div>
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-tight">
        <span className="text-[0.5rem] font-semibold text-[#ff6b6b]">PANORAMIC</span>
        <span className="text-[0.5rem] font-semibold bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-transparent bg-clip-text">INSIGHT</span>
        <span className="text-[0.4rem] text-[#0066cc] font-bold italic">by MM</span>
      </div>
    </div>
  );
}