import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState ('light');

    const changeTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  };

  const contextVal = {theme, changeTheme};

  return <ThemeContext.Provider value={contextVal}>
    {children}
    </ThemeContext.Provider>
}

export default ThemeContext;