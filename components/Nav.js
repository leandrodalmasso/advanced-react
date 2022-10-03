import Link from "next/link";

function Nav() {
  const pages = [
    { id: 0, text: "sell", href: "/sell" },
    { id: 1, text: "orders", href: "/orders" },
    { id: 2, text: "account", href: "/account" },
  ];

  return (
    <nav>
      {pages.map(({ id, text, href }) => (
        <Link key={id} href={href}>
          {text}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
