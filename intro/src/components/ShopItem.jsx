import React from 'react';
import PropTypes from 'prop-types';

export default function ShopItem(props) {

    const { item } = props;

    return (
        <tr>
            <th><img className='productTable' src={item.img} alt="foto" /></th>
            <th><h2>{item.name}</h2></th>
            <th>{item.color}</th>
            <th className='num'>${item.price}</th>
            <th><button className='add'>Add to cart</button></th>
        </tr>
    );
}

ShopItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
        color: PropTypes.string,
        img: PropTypes.string,
    })
} 