import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-2xl font-bold tracking-wide uppercase"
    >
      Creo Elements
    </Link>
  );
}

export default Logo;