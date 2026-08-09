import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop: Global scroll restoration component
 * 
 * Handles scroll position based on route changes:
 * - Pathname change: scroll to top
 * - Hash change: scroll to element (native browser behavior)
 * - Search/query change: scroll to top (for filtered results)
 * 
 * Does NOT interfere with browser back/forward history
 */
export function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, let the browser handle native anchor scrolling
    if (hash) {
      // Small delay to ensure DOM is ready
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
      return;
    }

    // For pathname or search changes, scroll to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [pathname, search, hash]);

  return null;
}
