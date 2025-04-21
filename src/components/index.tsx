import { clsx } from 'clsx';
import React from 'react';

export function SubHeading({ children }: React.ComponentPropsWithoutRef<'h2'>) {
  return <h2 className={clsx('*header-2')}>{children}</h2>;
}

export function Logo({ children, className, ...props }: React.ComponentPropsWithoutRef<'figure'>) {
  return (
    <figure className={clsx(className, 'flex justify-center items-center')} {...props}>
      <img alt="logo" src="./Innicement.svg" className="h-full" />
      {Boolean(children) && <figcaption>{children}</figcaption>}
    </figure>
  );
}
export function LogoWithText() {
  return <Logo className="h-10 overflow-hidden text-3xl lowercase">Innicement</Logo>;
}

export function List({ children, className, ...props }: React.ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul className={clsx('list', className)} {...props}>
      {React.Children.map(children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
}

export function Summary({ title, children }: React.ComponentPropsWithoutRef<'details'>) {
  return (
    <details>
      <summary className="cursor-pointer text-3xl hover:bg-green">{title}</summary>
      <div className="flex justify-end text-right children:w-6/12">{children}</div>
    </details>
  );
}
