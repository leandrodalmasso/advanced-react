import Header from "./Header";
import GlobalStyles from "../styles/GlobalStyles";
import InnerStyles from "../styles/InnerStyles";

function Page({ children }) {
  return (
    <>
      <GlobalStyles />

      <Header />

      <InnerStyles>{children}</InnerStyles>

      <footer>
        <p>Lean 2022</p>
      </footer>
    </>
  );
}

export default Page;
