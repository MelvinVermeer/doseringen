import { ChangeEvent, useState } from "react";
import "./App.css";
import raw from "./data/generated.json";
import { NoResults } from "./NoResults";
import { List } from "./List";

function App() {
  const data = raw as any[];

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(data);
  const [filtered2, setFiltered2] = useState<any[]>([]);

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    const q = event.target.value.trim().toLowerCase();

    const foundByTitle = data.filter((p: any) =>
      p.title.toLowerCase().includes(q)
    );

    const foundByContent = data.filter((p: any) => p.content.includes(q));

    setFiltered(foundByTitle);
    setFiltered2(
      foundByContent.filter((x) => !foundByTitle.some((y) => y.url === x.url))
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
          setFiltered(data);
        }}
      >
        clear
      </button>

      {filtered.length + filtered2.length === 0 && <NoResults />}
      {filtered.length > 0 && <List items={filtered} />}

      {filtered2.length > 0 && (
        <>
          <hr />
          <div>Gevonden op basis van de inhoud:</div>
          {filtered2.length > 0 && <List items={filtered2} />}
        </>
      )}
    </div>
  );
}

export default App;
