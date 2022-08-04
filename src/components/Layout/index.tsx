import { ReactFragment } from "react";

export default function Layout({
  children,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <>
      {/* <Nav /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
