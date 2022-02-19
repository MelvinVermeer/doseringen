import React, { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import raw from "./data/sample.json";
import { Detail } from "./Detail";
import { NoResults } from "./NoResults";
import { List } from "./List";

function App() {
  const data = raw as Record<string, string>;
  const products = Object.keys(data);

  const [query, setQuery] = useState("");

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filtered = products.filter((p) =>
    p.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <input
        className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="zoek"
        onChange={change}
      />

      <button
        className="bg-purple-600 ml-2 w-1/5 rounded p-2 text-white"
        onClick={() => setQuery("")}
      >
        clear
      </button>

      {filtered.length === 0 && <NoResults />}

      {filtered.length === 1 && (
        <Detail name={filtered[0]} content={data[filtered[0]]} />
      )}

      {filtered.length > 1 && <List items={filtered} onClickItem={setQuery} />}
    </div>
  );
}

export default App;
