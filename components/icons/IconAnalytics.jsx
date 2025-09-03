export default function IconAnalytics(props) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <linearGradient id="aG" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#56CCF2"/>
          <stop offset="50%" stopColor="#2F80ED"/>
          <stop offset="100%" stopColor="#BB6BD9"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#aG)" opacity="0.2"/>
      <path d="M14 30l6-8 4 5 6-9 4 6" stroke="url(#aG)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="22" r="2" fill="#FFFFFF"/>
      <circle cx="24" cy="27" r="2" fill="#FFFFFF"/>
      <circle cx="30" cy="18" r="2" fill="#FFFFFF"/>
      <circle cx="34" cy="24" r="2" fill="#FFFFFF"/>
    </svg>
  );
}
