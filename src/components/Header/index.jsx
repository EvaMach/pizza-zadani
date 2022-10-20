import React from 'react';
import { usePrefs } from '../../prefs-context';

const Header = () => {
  const { selectVegan } = usePrefs();

  return (
    <label>
      Only vegan:
      <input onChange={selectVegan} type="checkbox" />
    </label>
  );
};

export default Header;
