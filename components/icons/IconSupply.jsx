export default function IconSupply(props) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <linearGradient id="sG" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#FFD166"/>
          <stop offset="100%" stopColor="#EF476F"/>
        </linearGradient>
      </defs>
      <rect x="10" y="12" width="28" height="20" rx="3" fill="url(#sG)" />
      <path d="M14 12v-2h20v2" stroke="#FFE7B0" strokeWidth="2"/>
      <path d="M14 32v4h20v-4" stroke="#FFE7B0" strokeWidth="2"/>
      <circle cx="18" cy="36" r="3" fill="#FFE7B0"/>
      <circle cx="30" cy="36" r="3" fill="#FFE7B0"/>
    </svg>
  );
}
