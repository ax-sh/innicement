import type { ComponentPropsWithoutRef } from 'react';
import Footer from '../Footer';
import Nav from '../Nav';

export default function Layout({
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <>
      <Nav />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
}
