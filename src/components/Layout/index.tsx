import { ReactFragment } from "react";
import Nav from "../Nav";

export default function Layout({
  children,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
