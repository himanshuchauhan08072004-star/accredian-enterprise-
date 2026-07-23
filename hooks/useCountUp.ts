import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/**
 * Animates a number from 0 to `target` once the returned ref scrolls
 * into view. Returns the ref to attach and the current live value.
 */
export function useCountUp(target: number, duration = 1.8) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  return { ref, value };
}
