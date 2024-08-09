import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { animateElement } from '../../../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const bannerAnimation = (bannerRef, womanRef, textRef) => {
  gsap.set(womanRef.current, { opacity: 0, visibility: 'hidden' });

  // Woman Image Animation
  animateElement(
    womanRef.current,
    {
      from: { x: '100%', opacity: 0, visibility: 'hidden' },
      to: {
        x: '0%',
        opacity: 1,
        visibility: 'visible',
        duration: 6,
        ease: 'power2.inOut',
      },
    },
    {
      trigger: bannerRef.current,
      start: 'top 40%',
      end: '+=700',
      scrub: true,
      onEnter: () => gsap.to(womanRef.current, { visibility: 'visible' }),
      onEnterBack: () => gsap.to(womanRef.current, { visibility: 'visible' }),
      onLeaveBack: () => gsap.to(womanRef.current, { visibility: 'hidden' }),
    },
  );

  // Text Block Animation
  animateElement(
    textRef.current,
    {
      from: { opacity: 0, y: 120 },
      to: { opacity: 1, y: 0, duration: 1.5, ease: 'power2.inOut' },
    },
    {
      trigger: bannerRef.current,
      start: 'top 40%',
      end: '+=700',
      scrub: true,
    },
  );
};

export default bannerAnimation;
