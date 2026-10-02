export default function Logo({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="0" y="0" width="24" height="24" rx="7" fill="#007AFF" />
      <circle cx="10.5" cy="10.5" r="5" fill="none" stroke="#FFFFFF" strokeWidth="2.2" />
      <line x1="14.2" y1="14.2" x2="18.5" y2="18.5" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
