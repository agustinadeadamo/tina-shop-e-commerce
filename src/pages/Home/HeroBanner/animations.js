export const imageVariants = {
  initial: { scale: 1.3 },
  animate: { scale: 1 },
  transition: { duration: 0.7, ease: 'easeOut' },
};

export const textVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: (delay) => ({ delay, duration: 0.8, ease: 'easeOut' }),
};
