import React from 'react';
import './TCGCardList.css';
import formatPrice from '../utils/formaters';

const formatURLString = (productLine, set, product) => {
    let l = productLine.toLowerCase();
    let s = set.toLowerCase();
    let p = product.toLowerCase();

    l = l.replace(/ /g, '-');
    s = s.replace(/ /g, '-');
    p = p.replace(/ /g, '-');

    return `${l}-${s}-${p}`
}

const TCGCardList = ({ cards }) => {

    const handleClick = (productId, productLine, set, product) => {
        const url = `https://www.tcgplayer.com/product/${productId}/` + formatURLString(productLine, set, product);
        window.open(url, '_blank');
    }

    return (
        <div className="card-list">
            {cards
                .filter(card => card.listings && card.listings.length > 0)
                .map((card, index) => (
                    <div className="card" key={index}>
                        <div className='card-left'>
                            <img src={`https://product-images.tcgplayer.com/fit-in/563x563/${card.productId}.jpg`} alt={card.productName} className="card-image" onClick={() => handleClick(card.productId, card.productLineUrlName, card.setUrlName, card.productUrlName)} />
                        </div>
                        <div className="card-info">
                            <h3 className="card-name" onClick={() => handleClick(card.productId, card.productLineUrlName, card.setUrlName, card.productUrlName)}>{card.productName}</h3>
                            <p className="card-price">Price: {formatPrice(card.listings[0].price)}</p>
                            <p className="card-price">Shipping Price: {formatPrice(card.listings[0].shippingPrice)}</p>
                            {card.setName && <p className="card-set">Set: {card.setName}</p>}
                            {card.listings[0].condition && <p className="card-condition">Condition: {card.listings[0].condition}</p>}
                            {/* <a href={card.url} target="_blank" rel="noopener noreferrer" className="card-link">View Card</a> */}
                            {/* <p className="card-store" onClick={() => handleClick(card.productLineUrlName, card.setUrlName, card.productUrlName)}>{card.store}</p> */}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TCGCardList;