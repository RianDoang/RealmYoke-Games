import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import games from "@/data/games.json";

export default function GameSearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const fuse = useMemo(() => {
    return new Fuse(games, {
      keys: ["title"],
      threshold: 0.4,
    });
  }, []);

  const suggestions = query ? fuse.search(query).map((res) => res.item) : [];

  const handleSelectGame = (game) => {
    setQuery(""); // reset input biar bersih
    navigate(`/games/${game.title.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <div className="relative w-sm">
      <input
        type="text"
        placeholder="Search games..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded border border-gray-500 p-2 transition-colors duration-300 outline-none"
      />

      {query && (
        <div className="absolute z-10 mt-1 max-h-64 w-full overflow-y-auto rounded border border-gray-500 bg-gray-100 shadow-lg transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100">
          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map((g) => (
                <li
                  key={g.id}
                  className="flex cursor-pointer items-center gap-3 p-2 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => handleSelectGame(g)}
                >
                  <img
                    src={g.poster}
                    alt={g.title}
                    className="h-12 w-12 rounded object-cover"
                  />
                  <span className="font-medium">{g.title}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-3 text-center text-gray-500">
              Game tidak ditemukan
            </div>
          )}
        </div>
      )}
    </div>
  );
}
