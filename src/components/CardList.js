import React, { useState, useEffect } from 'react';
import './CardList.css';
import formatPrice from '../utils/formaters';

const CardList = ({ cards }) => {
    const [selectedIndices, setSelectedIndices] = useState([]);

    useEffect(() => {
        // Initialize selectedIndices when cards are available
        if (cards.length > 0) {
            setSelectedIndices(cards.map(() => 0));
        }
    }, [cards]);

    // console.log(cards);
    console.log("Selected Indices:", selectedIndices);

    const handleConditionChange = (cardIndex, newIndex) => {
        const newSelectedIndeces = [...selectedIndices];
        newSelectedIndeces[cardIndex] = newIndex;
        setSelectedIndices(newSelectedIndeces);
    }

    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <div className="card" key={index}>
                    <div className='card-left'>
                        <img src={card.img} alt={card.name} className="card-image" onClick={() => handleClick(card.url)} />
                        <p className="card-store" onClick={() => handleClick(card.website)}>{card.store}</p>
                    </div>
                    <div className="card-info">
                        <h3 className="card-name" onClick={() => handleClick(card.url)}>{card.name}</h3>
                        <p className="card-price">Price: {formatPrice(card.available_prices[selectedIndices[index]])}</p>
                        {card.set && <p className="card-set">Set: {card.set}</p>}
                        {card.available_conditions && card.available_conditions.length > 1 ? (
                            <div className="condition-box">
                                <p className="card-condition">Condition:</p>
                                <select
                                    value={selectedIndices[index]}
                                    onChange={(e) => handleConditionChange(index, parseInt(e.target.value))}
                                >
                                    {card.available_conditions.map((condition, conditionIndex) => (
                                        <option key={conditionIndex} value={conditionIndex}>
                                            {condition}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            <p className="card-condition">Condition: {card.available_conditions[0]}</p>
                        )}
                        {card.available_quantity && <p className="card-quantity">Quantity: {card.available_quantity[selectedIndices[index]]}</p>}
                        {/* <a href={card.url} target="_blank" rel="noopener noreferrer" className="card-link">View Card</a> */}

                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardList;