import { clsx } from "clsx";
import { List, Logo, navItems } from "..";

function AuthButtonWrapper() {
  return (
    <div>
      <button>Log In</button>
      <button>Get Started</button>
    </div>
  );
}

export default function Nav() {
  return (
    <nav className={clsx("container", "flex", "gap-2", "py-10")}>
      <Logo />
      <List className={clsx("flex", "gap-2")}>
        {navItems.map((i, index) => (
          <a className="" key={index}>
            {i}
          </a>
        ))}
      </List>
      <AuthButtonWrapper />
    </nav>
  );
}
