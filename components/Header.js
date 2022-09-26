import Link from "next/link";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <Link href="/">Sick Fits</Link>

      <Nav></Nav>
    </header>
  );
}

export default Header;
