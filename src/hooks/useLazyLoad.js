import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook that uses the Intersection Observer API to detect when a component enters the viewport.
 * This is particularly useful for implementing lazy loading or triggering animations when an element comes into view.
 * @param {Object} options - Configuration options for the Intersection Observer, such as root, rootMargin, and threshold.
 * @returns {[Object, boolean]} - Returns a ref to be attached to the target element and a boolean indicating whether the element is currently visible in the viewport.
 */
const useLazyLoad = options => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;

    // Create an IntersectionObserver to monitor the element's visibility in the viewport
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Disconnect observer after the element becomes visible to prevent further observations
        observer.disconnect();
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef); // Start observing the element
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up: stop observing the element when the component unmounts or ref changes
      }
    };
  }, [options]);

  return [ref, isVisible];
};

export default useLazyLoad;
