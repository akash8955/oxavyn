import React from 'react';
import Link from 'next/link';
import './not-found.css';

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-content">
        <div className="svg-container">
          <svg viewBox="0 0 800 500" className="not-found-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Grid */}
            <g className="grid" stroke="rgba(255,255,255,0.05)" strokeWidth="1">
              <line x1="0" y1="100" x2="800" y2="100" />
              <line x1="0" y1="200" x2="800" y2="200" />
              <line x1="0" y1="300" x2="800" y2="300" />
              <line x1="0" y1="400" x2="800" y2="400" />
              <line x1="200" y1="0" x2="200" y2="500" />
              <line x1="400" y1="0" x2="400" y2="500" />
              <line x1="600" y1="0" x2="600" y2="500" />
            </g>

            {/* 404 Text */}
            <text x="400" y="150" textAnchor="middle" className="text-404" filter="url(#glow)">404</text>
            <text x="400" y="200" textAnchor="middle" className="text-sub">PAGE NOT FOUND</text>

            {/* The Wall Socket / Switch Box */}
            <g transform="translate(550, 250)">
              <rect x="0" y="0" width="100" height="150" rx="10" fill="#334155" stroke="#475569" strokeWidth="4" />
              {/* Switch Lever Box */}
              <rect x="20" y="20" width="60" height="40" rx="5" fill="#1e293b" />
              {/* The Switch Lever (Animated) */}
              <rect x="25" y="25" width="50" height="20" rx="5" fill="#22c55e" className="switch-lever" />
              
              {/* The Plug Socket */}
              <circle cx="50" cy="100" r="25" fill="#0f172a" />
              <circle cx="40" cy="100" r="5" fill="#000" />
              <circle cx="60" cy="100" r="5" fill="#000" />
            </g>

            {/* The Plug */}
            <g className="plug-group" transform="translate(550, 340)">
              <rect x="30" y="0" width="40" height="30" rx="5" fill="#cbd5e1" />
              <rect x="40" y="-10" width="8" height="10" fill="#94a3b8" />
              <rect x="52" y="-10" width="8" height="10" fill="#94a3b8" />
            </g>

            {/* The Intact Wire */}
            <path className="wire-intact" d="M 570 370 Q 400 450 250 350" fill="none" stroke="#ef4444" strokeWidth="12" strokeLinecap="round" />

            {/* The Broken Wires (Hidden initially) */}
            <g className="wire-broken">
              <path d="M 570 370 Q 500 450 480 400" fill="none" stroke="#ef4444" strokeWidth="12" strokeLinecap="round" />
              <path d="M 380 400 Q 300 450 250 350" fill="none" stroke="#ef4444" strokeWidth="12" strokeLinecap="round" />
              
              {/* Sparks */}
              <g className="sparks">
                <line x1="480" y1="400" x2="470" y2="380" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
                <line x1="480" y1="400" x2="490" y2="370" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
                <line x1="380" y1="400" x2="370" y2="380" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
                <line x1="380" y1="400" x2="390" y2="370" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
              </g>
            </g>

            {/* The Cute Robot / Cartoon Character */}
            <g className="robot" transform="translate(180, 280)">
              {/* Robot Antenna */}
              <line x1="50" y1="20" x2="50" y2="0" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="50" cy="0" r="6" fill="#ef4444" className="antenna-bulb" />
              
              {/* Robot Body */}
              <rect x="20" y="20" width="60" height="70" rx="15" fill="#38bdf8" />
              
              {/* Robot Screen (Face) */}
              <rect x="30" y="35" width="40" height="25" rx="5" fill="#0f172a" />
              {/* Eyes */}
              <circle cx="42" cy="47" r="4" fill="#38bdf8" className="eye" />
              <circle cx="58" cy="47" r="4" fill="#38bdf8" className="eye" />
              
              {/* Robot Arm holding the wire */}
              <path d="M 80 50 Q 100 60 70 70" fill="none" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" className="robot-arm" />
              
              {/* Robot Wheels/Tracks */}
              <rect x="10" y="85" width="80" height="20" rx="10" fill="#475569" />
              <circle cx="25" cy="95" r="5" fill="#1e293b" />
              <circle cx="50" cy="95" r="5" fill="#1e293b" />
              <circle cx="75" cy="95" r="5" fill="#1e293b" />
            </g>
          </svg>
        </div>

        <div className="text-content">
          <h2 className="title">Oops! We broke the connection.</h2>
          <p className="description">Our little bot pulled the wrong wire and the page you are looking for is gone. Don't worry, you can head back to safety.</p>
          <Link href="/" className="btn-home">
            <span className="btn-text">Go Back Home</span>
            <span className="btn-icon">⚡</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
