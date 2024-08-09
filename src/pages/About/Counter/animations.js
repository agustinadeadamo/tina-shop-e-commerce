import { animateOnIntersection } from "../../../utils/animations";

const counterAnimation = (counters) => {
  const cleanupFunctions = counters.map((counter) => {
    if (!counter.ref.current) return null;

    return animateOnIntersection(counter.ref.current, {
      from: { textContent: 0 },
      to: {
        textContent: counter.end,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        onUpdate() {
          if (counter.ref.current) {
            counter.ref.current.textContent = Math.floor(
              counter.ref.current.textContent,
            );
          }
        },
      },
    });
  });

  return () => {
    cleanupFunctions.forEach((cleanup) => {
      if (cleanup) cleanup();
    });
  };
};

export default counterAnimation;
