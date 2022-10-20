import React from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping, checked, onToppingChecked }) => {
  return (
    <div className="topping">
      <Check checked={checked} onChange={onToppingChecked} topping={topping} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
