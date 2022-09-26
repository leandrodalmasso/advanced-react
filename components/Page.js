import Header from "./Header";

function Page({ children }) {
  return (
    <>
      <Header />

      {children}

      <footer>
        <p>Lean 2022</p>
      </footer>
    </>
  );
}

export default Page;
