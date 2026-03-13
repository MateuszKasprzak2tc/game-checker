import GameCard from "./GameCard";

export default function GameList({ games }) {
  return (
    <div className="row">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}