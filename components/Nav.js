import Link from "next/link";

function Nav() {
  const pages = [
    { id: 0, text: "products", href: "/products" },
    { id: 1, text: "sell", href: "/sell" },
    { id: 2, text: "orders", href: "/orders" },
    { id: 3, text: "account", href: "/account" },
    // { id: 4, text: "sign out", href: "/sign-out" },
    // { id: 5, text: "my cart", href: "/my-cart" },
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
