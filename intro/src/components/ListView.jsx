import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem.jsx';

export default function ListView(props) {

    const { items } = props;

    return (
        <table className='itemTable'>
            {items.map(item => <ShopItem item={item} />)}
        </table>
    );
}

ListView.propTypes = {
    items: PropTypes.array,
} 