import { useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.4,
      ...options
    });

    const currentElement = elementRef.current;

    if (currentElement) {
      currentElement.style.opacity = '0';
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
};

export default useScrollAnimation;