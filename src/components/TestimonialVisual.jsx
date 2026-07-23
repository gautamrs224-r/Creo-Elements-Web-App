/**
 * Decorative visual shown beside each testimonial. Falls back to a generic
 * abstract "circles" mark (matching the reference design) when a
 * testimonial doesn't have its own client photo/logo — just pass an
 * `image` prop (an imported file) on the testimonial data to override it
 * with a real photo once you have one.
 */
function TestimonialVisual({ image, alt = "" }) {
  if (image) {
    return (
      <div className="h-full w-full rounded-2xl overflow-hidden bg-white/50 flex items-center justify-center p-4">
        <img src={image} alt={alt} className="max-h-full max-w-full object-contain" />
      </div>
    );
  }

  return (
    <div className="h-full w-full rounded-2xl bg-white/40 flex items-center justify-center p-6">
      <svg viewBox="0 0 200 200" className="h-full w-full max-h-40 max-w-40" aria-hidden="true">
        <circle cx="70" cy="130" r="55" fill="#e63946" />
        <circle cx="140" cy="70" r="55" fill="#ffffff" stroke="#111" strokeWidth="4" />
        <circle cx="140" cy="130" r="55" fill="#4fb3d9" stroke="#111" strokeWidth="4" />
        <path
          d="M70 75 C70 105, 100 105, 100 135 C100 105, 130 105, 130 75"
          fill="none"
          stroke="#111"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}

export default TestimonialVisual;
