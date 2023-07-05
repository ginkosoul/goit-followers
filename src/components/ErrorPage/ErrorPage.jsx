import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <>
      <Link to="/">
        <h2>back home</h2>
      </Link>
      <h1>ErrorPage</h1>
    </>
  );
}
