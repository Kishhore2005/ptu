
/**
 * Custom animation utilities for smooth transitions and effects
 */

// Animation variants for staggered children animations
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

// Fade up animation for elements
export const fadeUp = {
  hidden: { 
    y: 20, 
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

// Fade in animation for elements
export const fadeIn = {
  hidden: { 
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.5,
    },
  },
};

// Animation delay utility function
export const getAnimationDelay = (index: number): string => {
  return `${index * 0.1}s`;
};

// Function to generate CSS for smooth scrolling
export const smoothScroll = () => {
  document.documentElement.style.scrollBehavior = 'smooth';
};

// Function to scroll to element by ID
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    smoothScroll();
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Page transition animation
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
