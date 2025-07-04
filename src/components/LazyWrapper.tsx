import { lazy, Suspense, ComponentType } from 'react';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

// Default loading skeleton
const DefaultSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`loading-skeleton h-32 w-full rounded-lg ${className}`}>
    <div className="animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-full w-full rounded-lg"></div>
  </div>
);

// Lazy wrapper for components
export const LazyWrapper = ({ 
  children, 
  fallback = <DefaultSkeleton />,
  className = ""
}: LazyWrapperProps) => (
  <Suspense fallback={fallback}>
    <div className={className}>
      {children}
    </div>
  </Suspense>
);

// Helper function to create lazy components
export const createLazyComponent = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallbackHeight: string = "h-32"
) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<DefaultSkeleton className={fallbackHeight} />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyWrapper;