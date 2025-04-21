import type { ComponentPropsWithoutRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Footer from '../Footer';
import Nav from '../Nav';

function fallbackRender({ error, resetErrorBoundary }:any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre className={'text-red'}>{error.message}</pre>
    </div>
  );
}

export default function Layout({
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <>
      <Nav />
      <main {...props}>
        <ErrorBoundary
          fallbackRender={fallbackRender}
          onReset={(details) => {
            // Reset the state of your app so the error doesn't happen again
          }}
        >
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
