import { useEffect, useState } from 'react';

/**
 * PageLoader: Global page transition loader
 * 
 * Appears briefly during route transitions.
 * Only renders if transition takes >100ms to avoid flickering.
 */
export function PageLoader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show loader after a short delay to avoid flickering on fast transitions
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-40 h-1 bg-gradient-to-r from-brand via-brand to-brand/50">
      <div className="h-full w-full animate-pulse bg-brand/80" />
    </div>
  );
}
