import { useState } from "react";

/** Driver photo that fades in once loaded, with a shimmer placeholder until then. */
const DriverPhoto = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div aria-hidden="true" className="shimmer absolute inset-0" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`absolute inset-0 size-full object-cover transition-[opacity,scale] duration-500 ease-out ${
          loaded ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
        }`}
      />
    </>
  );
};

export default DriverPhoto;
