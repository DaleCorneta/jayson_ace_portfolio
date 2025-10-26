import { useState } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 animate-pulse z-10">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default LazyImage;
