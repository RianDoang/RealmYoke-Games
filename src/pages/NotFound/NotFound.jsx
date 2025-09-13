import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold text-red-600">404 - Not Found</h1>
      <p className="text-lg text-gray-700">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  );
}
