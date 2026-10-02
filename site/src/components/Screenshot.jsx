export default function Screenshot({ src, alt, className = "" }) {
  return (
    <div className={`glow-border overflow-hidden rounded-xl border border-ink-700 shadow-2xl shadow-violet-glow/10 ${className}`}>
      <img src={src} alt={alt} className="block w-full" />
    </div>
  );
}
