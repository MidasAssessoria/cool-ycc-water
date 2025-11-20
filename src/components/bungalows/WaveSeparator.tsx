const WaveSeparator = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 -mb-1 overflow-hidden">
      <svg
        className="w-full h-16 sm:h-20 md:h-24 lg:h-28 text-background relative"
        viewBox="0 0 1440 120"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Animated Wave Path */}
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          className="animate-wave-motion"
        />

        {/* Secondary Wave for Depth */}
        <path
          d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,90.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          className="opacity-50 animate-wave-motion-delayed"
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;
