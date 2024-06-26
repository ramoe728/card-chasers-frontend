import React, { useState } from 'react';
import CardList from '../CardList';
import SearchBar from '../SearchBar';
import Header from '../Header';
import { useAuth } from '../../contexts/authContext';
import { Navigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    const { currentUser } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [allCards, setAllCards] = useState([]);
    const [tcgCards, setTcgCards] = useState([]);

    const handleSearch = async (searchTerm) => {
        setIsLoading(true);
        try {
            const tcgResponse = await fetch(`https://api.card-chasers.com/scrape_tcg_by_card_name?card_name=${encodeURIComponent(searchTerm)}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const tcgData = await tcgResponse.json();

            const allResponse = await fetch(`https://34.36.253.65/scrape_all_by_card_name?card_name=${encodeURIComponent(searchTerm)}`, {
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
            {!currentUser && (<Navigate to={'/login'} replace={true} />)}
            {currentUser && !currentUser.emailVerified && (<Navigate to={'/verify-email'} replace={true} />)}
            <Header />
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
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

export default Home;