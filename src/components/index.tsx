import React from "react";

export const navItems = ["Home", "About", "Investment", "Services", "News"];

export function List({ children }: React.ComponentPropsWithoutRef<"ul">) {
  return (
    <ul>
      {React.Children.map(children, (child) => {
        return <li>{child}</li>;
      })}
    </ul>
  );
}
