import React from 'react';
import PropTypes from 'prop-types';
import view_list from '../img/view_list.png';
import view_module from '../img/view_module.png';

export default function IconSwitch(props) {

    const { icon } = props;
    const { sw } = props;

    return (
        <img
            src={icon === 'view_list' ? view_list : view_module}
            alt="icon"
            onClick={sw}
            className='view'
        />
    );
}

IconSwitch.propTypes = {
    icon: PropTypes.string,
    sw: PropTypes.func,
} 