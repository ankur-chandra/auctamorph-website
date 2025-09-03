export default function IconFinance(props) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <linearGradient id="fG" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#00FFC6"/>
          <stop offset="100%" stopColor="#3DD8FF"/>
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="32" height="32" rx="8" fill="url(#fG)" opacity="0.18"/>
      <path d="M14 30h4v4h-4v-4zm8-6h4v10h-4V24zm8-8h4v18h-4V16z" fill="url(#fG)"/>
      <path d="M12 32h24" stroke="#BFFCF0" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
