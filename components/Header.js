import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  background: var(--red);
  color: var(--white);
  transform: skew(-7deg);
  text-transform: uppercase;
  padding: 1rem;
  line-height: 1;

  a:hover {
    text-decoration: none;
  }
`;

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Header() {
  return (
    <HeaderStyles>
      <Logo>
        <Link href="/">Sick Fits</Link>
      </Logo>

      <Nav />
    </HeaderStyles>
  );
}

export default Header;
