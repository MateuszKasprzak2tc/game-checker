export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      className="form-control form-control-lg mb-4"
      placeholder="Search games..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}