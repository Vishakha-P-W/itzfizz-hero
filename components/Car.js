// Car viewed from above, facing right.
export default function Car() {
  return (
    <svg viewBox="0 0 400 160" fill="none">
      {/* tyres */}
      <rect x="285" y="6" width="62" height="24" rx="8" fill="#111" />
      <rect x="285" y="130" width="62" height="24" rx="8" fill="#111" />
      <rect x="65" y="4" width="68" height="26" rx="8" fill="#111" />
      <rect x="65" y="130" width="68" height="26" rx="8" fill="#111" />
      {/* body */}
      <path
        d="M22 80 Q22 40 62 36 L250 30 Q330 34 386 70 Q396 80 386 90 Q330 126 250 130 L62 124 Q22 120 22 80Z"
        fill="#ff7a00"
      />
      {/* windshield + roof */}
      <path d="M195 50 L282 58 Q302 80 282 102 L195 110 Q180 80 195 50Z" fill="#161616" opacity="0.9" />
      <rect x="115" y="52" width="80" height="56" rx="14" fill="#e56a00" />
      {/* spoiler, mirrors, headlights */}
      <rect x="12" y="34" width="14" height="92" rx="4" fill="#111" />
      <rect x="262" y="22" width="22" height="9" rx="3" fill="#ff7a00" />
      <rect x="262" y="129" width="22" height="9" rx="3" fill="#ff7a00" />
      <path d="M352 62 L384 72 M352 98 L384 88" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
