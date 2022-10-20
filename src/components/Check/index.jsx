import React from 'react';
import { usePrefs } from '../../prefs-context';
import './style.css';

const Check = ({ checked, onChange, topping }) => {
  const { veganOnly } = usePrefs();

  return (
    <button
      className={`check${
        !topping.vegan && veganOnly ? ' check--disabled' : ''
      }`}
      onClick={onChange}
      disabled={!topping.vegan && veganOnly}
    >
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
