// src/App.js

import React, { useState } from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [allCards, setAllCards] = useState([]);
  const [tcgCards, setTcgCards] = useState([]);

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    try {
      const tcgResponse = await fetch(`https://card-chasers-f1b8d977959e.herokuapp.com/scrape_tcg_by_card_name?card_name=${encodeURIComponent(searchTerm)}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const tcgData = await tcgResponse.json();

      const allResponse = await fetch(`https://card-chasers-f1b8d977959e.herokuapp.com/scrape_all_by_card_name?card_name=${encodeURIComponent(searchTerm)}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const allData = await allResponse.json();

      console.log('All data:', allData);
      console.log('TCG data:', tcgData);

      setAllCards(allData["results"]);
      setTcgCards(tcgData["results"]);

      // Update your state or handle the data as needed
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      {/* {isLoading && <span className="spinner"></span>} */}
      <div className="columns">
        <div className="column left-column">
          <h2>Local</h2>
          <CardList cards={allCards} />
        </div>
        <div className="column right-column">
          <h2>TCGPlayer</h2>
          <CardList cards={tcgCards} />
        </div>
      </div>
    </div>
  );
}

export default App;
