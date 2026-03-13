import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div>
      {[...Array(fullStars)].map((_, i) => (
        <i key={"full" + i} className="bi bi-star-fill text-warning"></i>
      ))}
      {halfStar && <i className="bi bi-star-half text-warning"></i>}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={"empty" + i} className="bi bi-star text-warning"></i>
      ))}
    </div>
  );
}

export default function GameCard({ game }) {
  return (
    <div className="col-md-4 mb-4">
      <Link to={`/game/${game.id}`} className="text-decoration-none text-dark">
        <div className="card h-100 shadow-sm">
          <img
            src={game.background_image}
            alt={game.name}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{game.name}</h5>
            <p className="mb-1">
              Rating: <StarRating rating={game.rating} />
            </p>
            <p className="mb-0">Released: <b>{game.released}</b></p>
          </div>
        </div>
      </Link>
    </div>
  );
}