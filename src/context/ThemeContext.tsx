import { useState } from 'react';
import { themeContext } from '../helpers/constants';
import { Props } from '../helpers/types';

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<boolean>(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
