import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateAccordion = (element, isOpening, onComplete) => {
  const height = isOpening ? element.scrollHeight : 0;
  gsap.fromTo(
    element,
    { height: isOpening ? 0 : element.scrollHeight },
    {
      height,
      ease: "power1.inOut",
      duration: 0.3,
      onComplete: () => {
        element.style.height = isOpening ? "auto" : "";
        if (onComplete) onComplete();
      },
    },
  );
};

export default animateAccordion;
