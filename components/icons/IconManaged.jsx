export default function IconManaged(props) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <linearGradient id="mG" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#FFB457"/>
          <stop offset="100%" stopColor="#FF5B84"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#mG)" opacity="0.18"/>
      <path d="M24 14a10 10 0 100 20 10 10 0 000-20z" fill="url(#mG)"/>
      <path d="M24 11v4M24 33v4M11 24h4M33 24h4" stroke="#FFE9D1" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 20l3 3-3 3-3-3 3-3z" fill="#0A0A0A"/>
    </svg>
  );
}
