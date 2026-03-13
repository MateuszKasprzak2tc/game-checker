import { useState, useEffect } from "react";
import { api } from "../api/rawg";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import GameList from "../components/GameList";

export default function Home() {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const resPlatforms = await api.get("/platforms/lists/parents");
        const resGenres = await api.get("/genres");
        setPlatforms(resPlatforms.data.results);
        setGenres(resGenres.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilters();
  }, []);

  useEffect(() => {
    if (!query) return;

    const fetchGames = async () => {
        try {
            const res = await api.get("/games", { params: { 
                search: query,
                platforms: selectedPlatform,
                genres: selectedGenre,
                page_size: 20,
             } });
            const filtered = res.data.results.filter(game => game.rating >= 1);
            filtered.sort((a, b) => b.rating - a.rating);
            setGames(filtered);
        } catch (error) {
            console.error(error);
        }
    };

    const debounce = setTimeout(fetchGames, 500);
    return () => clearTimeout(debounce);
  }, [query, selectedPlatform, selectedGenre]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Game Finder</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <Filters
        platforms={platforms}
        genres={genres}
        selectedPlatform={selectedPlatform}
        selectedGenre={selectedGenre}
        setSelectedPlatform={setSelectedPlatform}
        setSelectedGenre={setSelectedGenre}
      />
      <GameList games={games} />
    </div>
  );
}