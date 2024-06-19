import React from 'react';
import './CardList.css';
import formatPrice from '../utils/formaters';

const CardList = ({ cards }) => {
    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <div className="card" key={index}>
                    <img src={card.img} alt={card.name} className="card-image" onClick={() => handleClick(card.url)} />
                    <div className="card-info">
                        <h3 className="card-name" onClick={() => handleClick(card.url)}>{card.name}</h3>
                        <p className="card-price">Price: {formatPrice(card.price)}</p>
                        {card.set && <p className="card-set">Set: {card.set}</p>}
                        {card.condition && <p className="card-condition">Condition: {card.condition}</p>}
                        {/* <a href={card.url} target="_blank" rel="noopener noreferrer" className="card-link">View Card</a> */}
                        <p className="card-store" onClick={() => handleClick(card.website)}>{card.store}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardList;