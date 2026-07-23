import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted">Page not found.</p>
        <Link to="/" className="teal-btn mt-6 inline-block">
          Go home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
