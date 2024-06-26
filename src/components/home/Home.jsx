import React, { useState, useEffect } from 'react';
import CardList from '../CardList';
import SearchBar from '../SearchBar';
import Header from '../Header';
import { useAuth } from '../../contexts/authContext';
import { Navigate } from "react-router-dom";
import './Home.css';
import { getToken } from '../../firebase/auth';
import tcgInit from '../../tcg_init.json'
import allInit from '../../all_init.json'

const Home = () => {
    const { currentUser } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [allCards, setAllCards] = useState(() => allInit);
    const [tcgCards, setTcgCards] = useState(() => tcgInit);

    const handleSearch = async (searchTerm) => {
        setIsLoading(true);
        try {
            const token = await getToken();
            const tcgResponse = await fetch(`https://flask-api-arvmj4dpaq-uw.a.run.app/scrape_tcg_by_card_name?card_name=${encodeURIComponent(searchTerm)}`, {
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
                }
            });
            const tcgData = await tcgResponse.json();

            const allResponse = await fetch(`https://flask-api-arvmj4dpaq-uw.a.run.app/scrape_all_by_card_name?card_name=${encodeURIComponent(searchTerm)}`, {
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
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