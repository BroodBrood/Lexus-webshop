/**
 * Preloads critical assets for faster rendering
 */

// Critical images to preload
const CRITICAL_IMAGES = [
  '/images/lfa.png', // Hero image
  '/images/lexus_nx.png', // First model in the grid
];

// Preload critical images
export const preloadCriticalImages = (): void => {
  CRITICAL_IMAGES.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Preload critical fonts
export const preloadFonts = (): void => {
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
};

// Initialize performance optimizations
export const initPerformanceOptimizations = (): void => {
  preloadCriticalImages();
  preloadFonts();
}; 