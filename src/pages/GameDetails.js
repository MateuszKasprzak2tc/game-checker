import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/rawg";
import GameTrailerModal from "../components/GameTrailerModal";

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await api.get(`/games/${id}`);
        setGame(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGame();
  }, [id]);

  if (!game) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} className="img-fluid mb-3" />
      <p>Rating: <b>{game.rating}</b></p>
      <p>Released: <b>{game.released}</b></p>

      {game.clip?.clip && (
        <button className="btn btn-danger mb-3" onClick={() => setShowTrailer(true)}>
          Watch Trailer
        </button>
      )}

      <GameTrailerModal
        show={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerUrl={game.clip?.clip}
      />

      <div dangerouslySetInnerHTML={{ __html: game.description }} />
    </div>
  );
}