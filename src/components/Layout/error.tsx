import type { PropsWithChildren } from 'react';
import type { FallbackProps } from 'react-error-boundary/dist/declarations/src/types';
import { ErrorBoundary } from 'react-error-boundary';

function AppErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function AppErrorBoundary({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary
      FallbackComponent={AppErrorFallback}
      onReset={(details) => {
        console.warn(details);
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
