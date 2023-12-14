import "./App.css";
import React, { useState, useEffect } from "react";
import { characters as charactersRaw } from "./data/characters";
import Card from "./components/Card";


function App() {
  const [characters, setCharacters] = useState(charactersRaw);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    // Filter characters based on the search input
    const filteredCharacters = charactersRaw.filter(character =>
      character.full_name.toLowerCase().includes(search.toLowerCase())
    );
    setCharacters(filteredCharacters);
  }, [search]);

  return (
    <div className='App'>
      <nav>
        <input onChange={handleSearch} value={search} placeholder="Search" />
        <button onClick={() => setSearch('')}>Clear</button>
      </nav>
      <section className='main'>
        {characters.map(character => (
          <Card character={character} />
        ))}
      </section>
    </div>
  );
}

export default App;
