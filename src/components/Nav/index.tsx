import { clsx } from "clsx";
import { List, navItems } from "..";

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
    <nav className={clsx("flex", "gap-2", "py-4 px-8")}>
      <List className={clsx("flex", "gap-2")}>
        {navItems.map((i) => (
          <a>{i}</a>
        ))}
      </List>
      <AuthButtonWrapper />
    </nav>
  );
}
