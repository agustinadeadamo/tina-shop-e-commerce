import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default gsap.registerPlugin(ScrollTrigger);

/**
 * Animates a single element using GSAP, with optional ScrollTrigger integration.
 *
 * @param {HTMLElement} element - The element to animate.
 * @param {Object} animation - The animation configuration, containing `from` and `to` properties.
 * @param {Object|null} scrollTriggerOptions - Optional ScrollTrigger settings to trigger the animation on scroll.
 */
export const animateElement = (
  element,
  animation,
  scrollTriggerOptions = null,
) => {
  const animOptions = {
    ...animation.to,
    scrollTrigger: scrollTriggerOptions
      ? {
          ...scrollTriggerOptions,
          trigger: element,
        }
      : null,
  };

  gsap.fromTo(element, animation.from, animOptions);
};

/**
 * Animates multiple elements with a staggered effect using GSAP.
 *
 * @param {HTMLElement[]} elements - The elements to animate.
 * @param {Object} animation - The animation configuration, containing `from` and `to` properties.
 * @param {number} stagger - The stagger delay between each element's animation start.
 */
export const animateMultipleElements = (elements, animation, stagger = 0.2) => {
  gsap.fromTo(elements, animation.from, {
    ...animation.to,
    stagger,
  });
};

/**
 * Handles intersection events to trigger animations when elements enter the viewport.
 * Disconnects the observer after the animation is triggered.
 *
 * @param {IntersectionObserverEntry[]} entries - The entries observed by the IntersectionObserver.
 * @param {IntersectionObserver} observer - The observer instance to disconnect after triggering animations.
 * @param {Object} animation - The animation configuration to apply when the element becomes visible.
 */
export const handleIntersection = (entries, observer, animation) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateElement(entry.target, animation);
      observer.disconnect();
    }
  });
};

/**
 * Sets up an IntersectionObserver to animate all elements within a container when they enter the viewport.
 *
 * @param {Object} containerRef - Reference to the container holding the elements to animate.
 * @param {Object} animation - The animation configuration to apply to the elements.
 * @param {number} stagger - The stagger delay between each element's animation start.
 * @param {Object} options - Options for the IntersectionObserver (default is { threshold: 0.3 }).
 */
export const setupIntersectionObserverForElements = (
  containerRef,
  animation,
  stagger = 0.2,
  options = { threshold: 0.3 },
) => {
  if (!containerRef.current) return;

  const elements = Array.from(containerRef.current.children);

  elements.forEach(element => {
    element.style.visibility = 'hidden';
  });

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMultipleElements(elements, animation, stagger);
        elements.forEach(element => {
          element.style.visibility = 'visible';
        });
        observerInstance.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(containerRef.current);
};

/**
 * Sets up an IntersectionObserver to animate an element when it enters the viewport.
 *
 * @param {HTMLElement} element - The element to observe and animate.
 * @param {Object} animation - The animation configuration for GSAP.
 * @param {Object} options - Optional IntersectionObserver settings (e.g., threshold).
 * @returns {Function} - Returns a function to disconnect the observer when needed.
 */
export const animateOnIntersection = (
  element,
  animation,
  options = { threshold: 0.3 },
) => {
  if (!element) return;

  element.style.visibility = 'hidden';

  const observer = new IntersectionObserver(([entry], observerInstance) => {
    if (entry.isIntersecting) {
      entry.target.style.visibility = 'visible';
      animateElement(entry.target, animation);

      observerInstance.disconnect();
    }
  }, options);

  observer.observe(element);

  return () => observer.disconnect();
};
