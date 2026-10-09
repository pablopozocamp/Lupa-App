export default function Logo({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 1024 1024" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lupa-logo-fondo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3D9BFF" />
          <stop offset="1" stopColor="#0062E0" />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" rx="232" fill="url(#lupa-logo-fondo)" />
      <circle cx="452" cy="452" r="214" fill="none" stroke="#FFFFFF" strokeWidth="72" />
      <line x1="612" y1="612" x2="786" y2="786" stroke="#FFFFFF" strokeWidth="96" strokeLinecap="round" />
      <polyline points="404,372 324,452 404,532" fill="none" stroke="#FFFFFF" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="500,372 580,452 500,532" fill="none" stroke="#FFFFFF" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
