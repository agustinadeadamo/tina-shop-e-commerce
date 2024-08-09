import { setupIntersectionObserverForElements } from "../../../utils/animations";

const teamMembersAnimations = (containerRef) => {
  setupIntersectionObserverForElements(
    containerRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    },
    0.2,
    {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    },
  );
};

export default teamMembersAnimations;
