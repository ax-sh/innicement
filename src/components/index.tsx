import { clsx } from 'clsx';
import React from 'react';

export function SubHeading({ children }: React.ComponentPropsWithoutRef<'h2'>) {
  return <h2 className={clsx('*header-2')}>{children}</h2>;
}

export function List(
  { children, className, ...props }: React.ComponentPropsWithoutRef<'ul'>,
) {
  return (
    <ul className={clsx('list', className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<HTMLElement>(child) && child.props.id) {
          return <li key={child.props.id}>{child}</li>;
        }
        // return null; // or handle the case where the child does not have an id
        return <li>{child}</li>;
      })}
    </ul>
  );
}

export function Summary(
  { title, children }: React.ComponentPropsWithoutRef<'details'>,
) {
  return (
    <details>
      <summary className="cursor-pointer text-3xl hover:bg-green">
        {title}
      </summary>
      <div className="flex justify-end text-right children:w-6/12">
        {children}
      </div>
    </details>
  );
}
