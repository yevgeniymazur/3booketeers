import { useState } from "react";

const SEARCH_OPTIONS = [
  { value: "intitle", label: "Title" },
  { value: "inauthor", label: "Author" },
];

const SORT_OPTIONS = [
  { value: "title", label: "Title" },
  { value: "author", label: "Author" },
  { value: "year", label: "Year" },
];

export default function BookSearch() {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState(SEARCH_OPTIONS[0].value);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [onlyWithCovers, setOnlyWithCovers] = useState(false);
  const [minYear, setMinYear] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setResults([]);
    if (!query.trim()) return;
    try {
      const q = `${searchType}:${query}`;
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=40`
      );
      const data = await res.json();
      if (data.items) {
        setResults(data.items);
      } else {
        setResults([]);
        setError("No books found.");
      }
    } catch (err) {
      setError("Error fetching books.");
    }
  };

  // Filtering and sorting
  let filteredResults = results;
  if (onlyWithCovers) {
    filteredResults = filteredResults.filter(
      book => book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
    );
  }
  if (minYear) {
    filteredResults = filteredResults.filter(book => {
      const year = book.volumeInfo.publishedDate?.slice(0, 4);
      return year && parseInt(year) >= parseInt(minYear);
    });
  }
  filteredResults = [...filteredResults].sort((a, b) => {
    if (sortBy === "title") {
      return (a.volumeInfo.title || "").localeCompare(b.volumeInfo.title || "");
    }
    if (sortBy === "author") {
      const aAuthor = a.volumeInfo.authors ? a.volumeInfo.authors[0] : "";
      const bAuthor = b.volumeInfo.authors ? b.volumeInfo.authors[0] : "";
      return aAuthor.localeCompare(bAuthor);
    }
    if (sortBy === "year") {
      const aYear = a.volumeInfo.publishedDate ? parseInt(a.volumeInfo.publishedDate.slice(0, 4)) : 0;
      const bYear = b.volumeInfo.publishedDate ? parseInt(b.volumeInfo.publishedDate.slice(0, 4)) : 0;
      return bYear - aYear; // newest first
    }
    return 0;
  });

  return (
    <section className="container">
      <h2>Book Search</h2>
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <select
          value={searchType}
          onChange={e => setSearchType(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px" }}
        >
          {SEARCH_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder={`Search by ${SEARCH_OPTIONS.find(opt => opt.value === searchType).label.toLowerCase()}...`}
          value={query}
          onChange={e => setQuery(e.target.value)}
          required
          style={{ flex: 1, padding: "0.5rem", borderRadius: "4px" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem", borderRadius: "20px", background: "var(--clr-secondary)", color: "#fff", border: "none", fontWeight: "bold" }}>
          Search
        </button>
      </form>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={onlyWithCovers}
            onChange={e => setOnlyWithCovers(e.target.checked)}
          />{" "}
          Only with covers
        </label>
        <label>
          Min Year:{" "}
          <input
            type="number"
            value={minYear}
            onChange={e => setMinYear(e.target.value)}
            style={{ width: "80px", marginLeft: "0.25rem" }}
            min="0"
            max={new Date().getFullYear()}
            placeholder="e.g. 2000"
          />
        </label>
        <label>
          Sort by:{" "}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            style={{ padding: "0.25rem", borderRadius: "4px", marginLeft: "0.25rem" }}
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </label>
      </div>
      {error && <div className="error">{error}</div>}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1.5rem"
      }}>
        {filteredResults.map(book => (
          <div key={book.id} style={{
            background: "#fff",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "1rem",
            textAlign: "center"
          }}>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                style={{ height: "120px", marginBottom: "0.5rem" }}
              />
            )}
            <div style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
              {book.volumeInfo.title}
            </div>
            {book.volumeInfo.authors && (
              <div style={{ fontSize: "0.95em", color: "#555" }}>
                {book.volumeInfo.authors.join(", ")}
              </div>
            )}
            {book.volumeInfo.publishedDate && (
              <div style={{ fontSize: "0.9em", color: "#888" }}>
                {book.volumeInfo.publishedDate}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}