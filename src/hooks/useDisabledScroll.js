import { useEffect } from 'react';

/**
 * Custom hook that disables scrolling on the document body when a condition is met.
 * Typically used for modal dialogs or sidebars that need to prevent background scrolling.
 *
 * @param {boolean} isOpen - A boolean value that indicates whether to disable scrolling.
 * If true, scrolling is disabled; if false, scrolling is enabled.
 */
function useDisableScroll(isOpen) {
  useEffect(() => {
    const bodyClass = document.body.classList;
    const overflowHiddenClass = 'overflow-hidden';

    if (isOpen) {
      bodyClass.add(overflowHiddenClass);
    } else {
      bodyClass.remove(overflowHiddenClass);
    }

    // Cleanup function to ensure the class is removed on unmount
    return () => bodyClass.remove(overflowHiddenClass);
  }, [isOpen]);
}

export default useDisableScroll;
