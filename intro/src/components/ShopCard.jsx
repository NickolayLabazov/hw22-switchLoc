import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCard(props) {

    const { card } = props;

    return (
        <div className='card'>
            <h2>{card.name}</h2>
            <p>{card.color}</p>
            <img className='product' src={card.img} alt="foto" />
            <div className='price'>
                <p className='num'>${card.price}</p>
                <button className='add'>Add to cart</button>

            </div>
        </div>
    );
}

ShopCard.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
        color: PropTypes.string,
        img: PropTypes.string,
    })
} 