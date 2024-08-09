import { setupIntersectionObserverForElements } from '../../utils/animations';

const trendingProductsAnimation = children =>
  setupIntersectionObserverForElements(
    children,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
    },
    0.2, 
  );

export default trendingProductsAnimation;
