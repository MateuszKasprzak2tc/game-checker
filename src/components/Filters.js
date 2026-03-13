import React from "react";

export default function Filters({
  platforms,
  genres,
  selectedPlatform,
  selectedGenre,
  setSelectedPlatform,
  setSelectedGenre,
}) {
  return (
    <div className="mb-4">
      <h5>Platforms</h5>
      <div className="d-flex flex-wrap mb-3">
        {platforms.map((p) => (
          <button
            key={p.id}
            className={`btn btn-sm me-2 mb-2 ${
              selectedPlatform === p.slug ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() =>
              setSelectedPlatform(selectedPlatform === p.slug ? null : p.slug)
            }
          >
            {p.name}
          </button>
        ))}
      </div>

      <h5>Genres</h5>
      <div className="d-flex flex-wrap mb-3">
        {genres.map((g) => (
          <button
            key={g.id}
            className={`btn btn-sm me-2 mb-2 ${
              selectedGenre === g.slug ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() =>
              setSelectedGenre(selectedGenre === g.slug ? null : g.slug)
            }
          >
            {g.name}
          </button>
        ))}
      </div>

      {(selectedPlatform || selectedGenre) && (
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setSelectedPlatform(null);
            setSelectedGenre(null);
          }}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}