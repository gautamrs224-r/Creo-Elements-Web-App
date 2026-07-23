/**
 * Renders a magnifying glass: a chrome rim + handle, with an image
 * clipped into a circle inside the rim. Pure SVG so the whole thing
 * (rim, handle and photo) scales together as a single unit when GSAP
 * animates the wrapping element — matching the reference screenshot
 * where the lens grows from a small dot into a large magnifying glass.
 */
function MagnifierLens({ imgSrc, imgAlt = "", className = "" }) {
  const center = 160;
  const rimRadius = 132;
  const imageRadius = 116;
  const handleAngleDeg = 40;
  const handleLength = 118;
  const handleWidth = 36;

  const rad = (handleAngleDeg * Math.PI) / 180;
  const startX = center + rimRadius * Math.cos(rad);
  const startY = center + rimRadius * Math.sin(rad);
  const endX = center + (rimRadius + handleLength) * Math.cos(rad);
  const endY = center + (rimRadius + handleLength) * Math.sin(rad);

  return (
    <svg
      viewBox="0 0 380 340"
      className={className}
      style={{ overflow: "visible" }}
      aria-hidden={imgAlt ? undefined : true}
      role={imgAlt ? "img" : undefined}
      aria-label={imgAlt || undefined}
    >
      <defs>
        <clipPath id="lensClip">
          <circle cx={center} cy={center} r={imageRadius} />
        </clipPath>
        <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f6f7" />
          <stop offset="45%" stopColor="#b8bec2" />
          <stop offset="100%" stopColor="#787f84" />
        </linearGradient>
        <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a3d40" />
          <stop offset="100%" stopColor="#0f1113" />
        </linearGradient>
      </defs>

      {/* soft ambient glow behind the whole lens */}
      <circle cx={center} cy={center} r={rimRadius + 22} fill="rgba(0,0,0,0.45)" style={{ filter: "blur(18px)" }} />

      {/* handle (drawn first so the rim overlaps its base) */}
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="url(#handleGrad)"
        strokeWidth={handleWidth}
        strokeLinecap="round"
      />
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={handleWidth * 0.28}
        strokeLinecap="round"
        transform={`translate(${-4 * Math.sin(rad)}, ${4 * Math.cos(rad)})`}
      />

      {/* photo, clipped to a circle */}
      <image
        href={imgSrc}
        x={center - imageRadius}
        y={center - imageRadius}
        width={imageRadius * 2}
        height={imageRadius * 2}
        clipPath="url(#lensClip)"
        preserveAspectRatio="xMidYMid slice"
        alt={imgAlt}
      />

      {/* inner shadow for depth where the photo meets the rim */}
      <circle cx={center} cy={center} r={imageRadius} fill="none" stroke="rgba(0,0,0,0.45)" strokeWidth="6" />

      {/* chrome rim */}
      <circle cx={center} cy={center} r={rimRadius} fill="none" stroke="url(#rimGrad)" strokeWidth="16" />

      {/* glossy highlight arc, upper-left of the rim */}
      <path
        d={`M ${center - rimRadius * 0.75} ${center - rimRadius * 0.55} A ${rimRadius} ${rimRadius} 0 0 1 ${center + rimRadius * 0.3} ${center - rimRadius * 0.95}`}
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default MagnifierLens;
