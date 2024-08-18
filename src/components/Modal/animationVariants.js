export const containerVariants = {
  hidden: { scaleY: 0, transformOrigin: 'top' },
  visible: {
    scaleY: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    scaleY: 0,
    transition: { duration: 0.4, delay: 0.3 }, // Delay to close the overlay after the modal content
  },
};

export const contentVariants = {
  hidden: { opacity: 0, scale: 0, transformOrigin: 'top' },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.4 }, // Delay to wait for the container to finish animating
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  },
};
