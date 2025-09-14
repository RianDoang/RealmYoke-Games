export default function Footer() {
  return (
    <>
      <footer className="w-full border-t border-t-gray-300 bg-gray-100 px-20 py-5 text-center text-sm text-gray-600 transition-colors duration-300 dark:border-t-gray-700 dark:bg-gray-900 dark:text-gray-400">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://riandoang.vercel.app"
            target="_blank"
            className="hover:underline hover:text-gray-400"
          >
            RealmYoke™.
          </a>{" "}
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
