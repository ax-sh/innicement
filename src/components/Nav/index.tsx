import { List, navItems } from "..";

export default function Nav() {
  return (
    <nav>
      <List>
        {navItems.map((i) => (
          <a>{i}</a>
        ))}
      </List>
    </nav>
  );
}
