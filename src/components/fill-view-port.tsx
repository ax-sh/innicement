import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export function FillViewPort({ children, className }: ComponentPropsWithoutRef<'div'>) {
  return (
    <section className={clsx('h-[100dvh] bg-black text-white text-4xl grid place-content-center', className)}>
      {children}
    </section>
  );
}
