import { ChangeEvent, useState } from "react";
import "./App.css";
import raw from "./data/data.json";
import { NoResults } from "./NoResults";
import { List } from "./List";

function App() {
  const data = raw as Record<string, any>;
  const products = Object.keys(data);

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(products);

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setFiltered(
      products.filter((p) =>
        p.toLowerCase().includes(event.target.value.trim().toLowerCase())
      )
    );
  };

  return (
    <div>
      <input
        className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="zoek"
        value={query}
        onChange={change}
      />

      <button
        className="bg-purple-600 ml-2 w-1/5 rounded p-2 text-white"
        onClick={() => {
          setQuery("");
          setFiltered(products);
        }}
      >
        clear
      </button>

      {filtered.length === 0 && <NoResults />}
      {filtered.length > 0 && <List items={filtered} />}
    </div>
  );
}

export default App;
