import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const options = {
  max: 10,
  speed: 300,
  scale: 1.05,
  gyroscope: false,
  glare: true,
  "max-glare": 0.4,
};

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

const Tilt = ({ children, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (prefersReducedMotion()) return;

    // Expose the pointer position as CSS variables for the holographic foil.
    const onTilt = ({ detail }) => {
      el.style.setProperty("--tilt-x", `${detail.percentageX}%`);
      el.style.setProperty("--tilt-y", `${detail.percentageY}%`);
    };

    VanillaTilt.init(el, options);
    el.addEventListener("tiltChange", onTilt);
    return () => {
      el.removeEventListener("tiltChange", onTilt);
      el.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

export default Tilt;
