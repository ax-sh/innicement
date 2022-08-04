import { clsx } from "clsx";
import { List, Logo, navItems } from "..";

function AuthButtonWrapper() {
  return (
    <div className="flex gap-4">
      <button className="border border-black p-4  px-6 ">Log In</button>
      <button className="border border-black py-4 px-6 bg-[#2F5EBF] text-white">
        <strong>Get Started</strong>
      </button>
    </div>
  );
}

export default function Nav() {
  return (
    <nav
      className={clsx(
        "container",
        "flex",
        "gap-2",
        "py-10",
        "justify-between items-center"
      )}
    >
      <Logo />
      <List
        className={clsx(
          "flex",
          //  "flex-grow justify-evenly",
          "gap-2"
        )}
      >
        {navItems.map((i, index) => (
          <a className="cursor-pointer" key={index}>
            {i}
          </a>
        ))}
      </List>
      <AuthButtonWrapper />
    </nav>
  );
}
