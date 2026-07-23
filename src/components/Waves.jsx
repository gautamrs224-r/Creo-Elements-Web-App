
function Waves() {
  return (
    <div className="waves-container">
      <svg
        className="waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="hero-gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <use href="#hero-gentle-wave" x="48" y="0" className="wave1" fill="rgba(213, 247, 238, 0.7)" />
        <use href="#hero-gentle-wave" x="48" y="3" className="wave2" fill="rgba(143, 230, 205, 0.6)" />
        <use href="#hero-gentle-wave" x="48" y="5" className="wave3" fill="rgba(79, 224, 191, 0.75)" />
        <use href="#hero-gentle-wave" x="48" y="7" className="wave4" fill="#2ec6a6" />
      </svg>
    </div>
  );
}

export default Waves;
