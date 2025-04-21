import type { ComponentPropsWithoutRef } from 'react';
import Footer from '../Footer';
import Nav from '../Nav';

export default function Layout({
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
	console.log(import.meta.env.VITE_BASE_URL,3322);
  return (
    <>
      <Nav />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
}
