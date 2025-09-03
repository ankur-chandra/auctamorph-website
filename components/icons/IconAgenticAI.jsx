export default function IconAgenticAI(props) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#5B9BFF"/>
          <stop offset="50%" stopColor="#7A5BFF"/>
          <stop offset="100%" stopColor="#FF5BB0"/>
        </linearGradient>
        <radialGradient id="r1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#g1)" opacity="0.25"/>
      <circle cx="24" cy="24" r="14" fill="url(#g1)" />
      <circle cx="24" cy="24" r="10" fill="url(#r1)"/>
      <path d="M24 10v4M24 34v4M10 24h4M34 24h4M16 16l3 3M29 29l3 3M32 16l-3 3M19 29l-3 3" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}
