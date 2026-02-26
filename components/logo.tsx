"use client";

import { useId } from "react";

export function LogoIcon({ size = 32 }: { size?: number }) {
  const uid = useId();
  const dGradId = `dGrad-${uid}`;
  const dInnerId = `dInner-${uid}`;
  const glowId = `glow-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]"
    >
      <defs>
        <linearGradient id={dGradId} x1="140" y1="100" x2="420" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id={dInnerId} x1="200" y1="198" x2="354" y2="314" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Background - white */}
      <rect width="512" height="512" rx="120" fill="white" />
      {/* D letter outer */}
      <path
        d="M160 115L160 397L285 397C365 397 415 338 415 256C415 174 365 115 285 115Z"
        fill="none"
        stroke={`url(#${dGradId})`}
        strokeWidth="44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* D letter inner accent */}
      <path
        d="M200 198L268 198C320 198 354 222 354 256C354 290 320 314 268 314L200 314"
        fill="none"
        stroke={`url(#${dInnerId})`}
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {/* AI accent dot with glow */}
      <g filter={`url(#${glowId})`}>
        <circle cx="390" cy="132" r="24" fill="#22d3ee" />
        <circle cx="390" cy="132" r="12" fill="white" opacity="0.9" />
      </g>
    </svg>
  );
}

export function Logo({ size = 36, showText = true }: { size?: number; showText?: boolean }) {
  if (!showText) return <LogoIcon size={size} />;

  return (
    <div className="flex items-center gap-3">
      <LogoIcon size={size} />
      <div className="flex flex-col leading-none">
        <span style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[22px] tracking-tight leading-none">
          <span className="text-white">Datvik</span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> AI</span>
        </span>
        <span style={{ fontFamily: "'Sora', sans-serif" }} className="text-[9px] font-semibold tracking-[0.25em] uppercase text-slate-500 mt-0.5">
          The Agent OS
        </span>
      </div>
    </div>
  );
}

export function LogoCompact({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon size={size} />
      <span style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg tracking-tight leading-none">
        <span className="text-white">Datvik</span>
        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> AI</span>
      </span>
    </div>
  );
}
