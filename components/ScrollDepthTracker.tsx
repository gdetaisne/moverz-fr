"use client";

/**
 * ScrollDepthTracker - Track scroll depth milestones
 * Tracks: 25%, 50%, 75%, 90%, 100%
 */

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/tracking';

export function ScrollDepthTracker() {
  const depths = useRef(new Set<number>());
  const pathname = useRef<string>('');
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    pathname.current = window.location.pathname;
    
    const onScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight === 0) return;
      
      const scrolled = (window.scrollY / scrollHeight) * 100;
      
      // Track milestones: 25%, 50%, 75%, 90%, 100%
      [25, 50, 75, 90, 100].forEach(depth => {
        if (scrolled >= depth && !depths.current.has(depth)) {
          depths.current.add(depth);
          trackEvent('scroll_depth', { 
            depth,
            pathname: pathname.current
          });
        }
      });
    };
    
    // Check immediately in case already scrolled
    onScroll();
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return null;
}
