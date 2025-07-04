import { createLazyComponent } from './LazyWrapper';

// Lazy load heavy components that are below the fold
export const LazyTeamSection = createLazyComponent(
  () => import('./TeamSection'),
  "h-96"
);

export const LazyProductShowcaseSection = createLazyComponent(
  () => import('./ProductShowcaseSection'),
  "h-80"
);

export const LazyVideoSection = createLazyComponent(
  () => import('./VideoSection'),
  "h-64"
);

export const LazyBookBackgroundInfo = createLazyComponent(
  () => import('./BookBackgroundInfo'),
  "h-96"
);

export const LazyTimeline = createLazyComponent(
  () => import('./Timeline'),
  "h-80"
);

export const LazyContactSection = createLazyComponent(
  () => import('./ContactSection'),
  "h-48"
);

// Cart-related components (only load when needed)
export const LazyCartToast = createLazyComponent(
  () => import('./CartToast'),
  "h-24"
);

export const LazyImagePreviewModal = createLazyComponent(
  () => import('./ImagePreviewModal'),
  "h-screen"
);