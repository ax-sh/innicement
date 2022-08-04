import { clsx } from "clsx";
import React from "react";

export const navItems = ["Home", "About", "Investment", "Services", "News"];

export function SubHeading({ children }: React.ComponentPropsWithoutRef<"h2">) {
  return <h2 className={clsx("*header-2")}>{children}</h2>;
}

export function range(size: number, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}

export function Logo({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"figure">) {
  return (
    <figure
      className={clsx(className, "flex justify-center items-center")}
      {...props}
    >
      <img src="/Innicement.svg" className="h-full" />
      {children && <figcaption>{children}</figcaption>}
    </figure>
  );
}
export function LogoWithText() {
  return (
    <Logo className="h-10 overflow-hidden text-3xl lowercase">Innicement</Logo>
  );
}

export function List({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
  return (
    <ul className={clsx("list", className)} {...props}>
      {React.Children.map(children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
}
