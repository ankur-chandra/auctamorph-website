export default function IconRPA(props) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <linearGradient id="rpaG" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#00C2FF"/>
          <stop offset="100%" stopColor="#00FFA3"/>
        </linearGradient>
      </defs>
      <rect x="6" y="10" width="36" height="24" rx="4" fill="url(#rpaG)" opacity="0.2"/>
      <rect x="10" y="14" width="28" height="16" rx="2" fill="url(#rpaG)"/>
      <circle cx="20" cy="22" r="2" fill="#0A0A0A"/>
      <circle cx="28" cy="22" r="2" fill="#0A0A0A"/>
      <rect x="22" y="26" width="4" height="2" rx="1" fill="#0A0A0A"/>
      <path d="M24 6v4M24 34v8M6 24h4M38 24h4" stroke="#67F5D6" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
