import { clsx } from "clsx";
import React from "react";

export const navItems = ["Home", "About", "Investment", "Services", "News"];

export function range(size: number, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
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
