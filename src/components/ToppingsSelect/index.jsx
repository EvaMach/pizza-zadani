import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [toppingStates, setToppingStates] = useState(
    Array(toppings.length).fill(false),
  );
  const [total, setTotal] = useState(0);

  const handleToppingChecked = (index) => {
    const selectedToppings = [...toppingStates];
    selectedToppings[index] = !toppingStates[index];
    setToppingStates(selectedToppings);

    if (selectedToppings[index]) {
      setTotal(Math.round((total + toppings[index].price) * 100) / 100);
    } else {
      setTotal(Math.round((total - toppings[index].price) * 100) / 100);
    }
  };

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings:{' '}
        {toppingStates.filter((topping) => topping === true).length}, total
        price: {total} Euro
      </p>
      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onToppingChecked={() => handleToppingChecked(index)}
            checked={toppingStates[index]}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
