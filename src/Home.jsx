import { Link } from "react-router-dom";
import games from "@/data/games.json";

export default function Home() {
  return (
    <>
      <section className="w-full px-10 pt-10">
        {/* Render SEMUA game */}
        <div className="grid grid-cols-5 gap-6">
          {games.map((g) => (
            <Link
              to={`/games/${g.title.replace(/\s+/g, "-").toLowerCase()}`}
              key={g.id}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-400 shadow"
            >
              <img src={g.poster} alt={g.title} className="object-cover" />

              {/* Konten */}
              <div className="flex flex-1 flex-col gap-3 p-3">
                <h2 className="text-lg font-semibold">{g.title}</h2>

                {/* Biar selalu di bawah */}
                <div className="mt-auto flex justify-start">
                  <Link
                    to={`/games/${g.title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="inline-flex items-center justify-center rounded bg-cyan-600 px-3 py-2 text-sm text-gray-50 transition duration-100 hover:bg-cyan-600/85"
                  >
                    View Details
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
