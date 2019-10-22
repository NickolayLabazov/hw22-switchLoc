import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard.jsx';

export default function CardsView(props) {

    const { cards } = props;

    return (
        <div className='cardsViewBox'>
            {cards.map(card => <ShopCard card={card} />)}
        </div>
    );
}

CardsView.propTypes = {
    cards: PropTypes.array,
} 