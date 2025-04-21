import { clsx } from 'clsx';
import React from 'react';

export function Logo(
  { children, className, ...props }: React.ComponentPropsWithoutRef<'figure'>,
) {
  return (
    <figure
      className={clsx(className, 'flex justify-center items-center')}
      {...props}
    >
      <img alt="logo" src="./Innicement.svg" className="h-full" />
      {Boolean(children) && <figcaption>{children}</figcaption>}
    </figure>
  );
}

export function LogoWithText() {
  return (
    <Logo className="h-10 overflow-hidden text-3xl lowercase">Innicement</Logo>
  );
}

export function LogoWithTextAndLink() {
  return (
    <a className="cursor-pointer" href="/">
      <LogoWithText />
    </a>
  );
}
