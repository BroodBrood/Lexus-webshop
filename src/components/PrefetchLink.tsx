import React, { useState, useCallback } from 'react';
import { Link, LinkProps } from 'react-router-dom';

// Map of routes to their lazy-loaded components for prefetching
const routeComponentMap: Record<string, () => Promise<any>> = {
  '/models': () => import('../pages/ModelsPage'),
  '/about': () => import('../pages/AboutPage'),
  '/experience': () => import('../pages/ExperiencePage'),
  '/contact': () => import('../pages/ContactPage'),
  '/testdrive': () => import('../pages/TestDrivePage'),
  '/technology': () => import('../pages/TechnologyPage'),
};

interface PrefetchLinkProps extends LinkProps {
  children: React.ReactNode;
}

/**
 * A Link component that prefetches the target route's component on hover or pointer down
 */
const PrefetchLink: React.FC<PrefetchLinkProps> = ({ to, children, ...props }) => {
  const [prefetched, setPrefetched] = useState(false);
  
  const handlePrefetch = useCallback(() => {
    if (prefetched || typeof to !== 'string') return;
    
    const importComponent = routeComponentMap[to];
    if (importComponent) {
      // Start preloading the component
      importComponent();
      setPrefetched(true);
    }
  }, [to, prefetched]);
  
  return (
    <Link 
      to={to} 
      onMouseEnter={handlePrefetch}
      onPointerDown={handlePrefetch}
      {...props}
    >
      {children}
    </Link>
  );
};

export default React.memo(PrefetchLink); 