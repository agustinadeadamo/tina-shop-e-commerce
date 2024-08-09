import { setupIntersectionObserverForElements } from "../../../utils/animations";

const reviewsAnimation = (titleRef) => {
  setupIntersectionObserverForElements(
    { current: titleRef.current },
    {
      from: { opacity: 0, y: -50 },
      to: { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    },
  );
};

export default reviewsAnimation;
