import { animateOnIntersection } from "../../../utils/animations";

const heroBannerAnimations = (bannerRef, womanRef, initialTextRefs) => {
  // Woman image animation
  animateOnIntersection(
    womanRef.current,
    {
      from: { x: "100%", opacity: 0 },
      to: { x: "0%", opacity: 1, duration: 1.5, ease: "power2.inOut" },
    },
    { threshold: 0.3 },
  );

  // Text Copy animation
  initialTextRefs.current.forEach((el) => {
    animateOnIntersection(
      el,
      {
        from: { y: "100%", opacity: 0 },
        to: { y: "0%", opacity: 1, duration: 1.5, ease: "power2.inOut" },
      },
      { threshold: 0.3 },
    );
  });
};

export default heroBannerAnimations;
