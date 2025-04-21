import { clsx } from 'clsx';
import React from 'react';
import { List } from '..';
import { navItems } from '../constants';
import { LogoWithTextAndLink } from '../logo';

export function NavButton({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      type="button"
      className={clsx(className, 'border border-black p-4 px-6')}
      {...props}
    >
      {children}
    </button>
  );
}

export function GetStartedButton({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <NavButton
      className={clsx('bg-[#2F5EBF] text-white', className)}
      {...props}
    >
      <strong>Get Started</strong>
    </NavButton>
  );
}

function AuthButtonWrapper() {
  return (
    <div className="flex gap-4">
      <NavButton>Log In</NavButton>
      <GetStartedButton />
    </div>
  );
}

export default function Nav() {
  return (
    <nav
      className={clsx(
        'container',
        'flex md:flex-row flex-col',
        'gap-2',
        'py-10',
        'justify-between items-center',
      )}
    >
      <LogoWithTextAndLink />
      <List
        className={clsx(
          'flex',
          //  "flex-grow justify-evenly",
          'gap-2',
        )}
      >
        {navItems.map(i => (
          <a
            className="cursor-pointer font-medium hover:font-bold"
            key={`nav-${i}`}
            href={`#${i}`}
          >
            {i}
          </a>
        ))}
      </List>
      <AuthButtonWrapper />
    </nav>
  );
}
