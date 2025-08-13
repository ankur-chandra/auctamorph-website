export default function IconITSM(props) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <linearGradient id="iG" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#8FD3FE"/>
          <stop offset="100%" stopColor="#A78BFA"/>
        </linearGradient>
      </defs>
      <rect x="8" y="10" width="32" height="24" rx="6" fill="url(#iG)" opacity="0.22"/>
      <rect x="12" y="14" width="24" height="16" rx="3" fill="url(#iG)"/>
      <rect x="16" y="18" width="16" height="2" rx="1" fill="#0A0A0A"/>
      <rect x="16" y="22" width="12" height="2" rx="1" fill="#0A0A0A"/>
      <rect x="16" y="26" width="10" height="2" rx="1" fill="#0A0A0A"/>
    </svg>
  );
}
