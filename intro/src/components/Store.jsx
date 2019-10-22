import React, { useState } from 'react';
import IconSwitch from './IconSwitch.jsx';
import CardsView from './CardsView.jsx';
import ListView from './ListView.jsx';

export default function Store() {

  const [marking, setMarking] = useState(false);

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const onSwitch = () => {
    setMarking((prevMarking) => !prevMarking);
  }

  return (
    <>
      <div className='iconBox'>
        <IconSwitch
          icon={marking ? 'view_list' : 'view_module'}
          sw={onSwitch}
        />
      </div>
      {marking ? <ListView
        items={products} /> : <CardsView
          cards={products} />}
    </>
  );
}