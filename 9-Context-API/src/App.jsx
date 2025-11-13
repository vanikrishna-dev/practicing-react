import { useState } from "react"
import Button from "./components/Button"
import Heading from "./components/Heading"
import ThemeContext from "./store/ThemeContext"

function App() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }

  return (
      <ThemeContext.Provider value={{theme, changeTheme}}>
      <div className={`h-screen ${theme === 'light' ? " bg-pink-100" : "bg-blue-950"}`}>
        <Heading />
        <br />
        <Button />
      </div>
      </ThemeContext.Provider>
  )
}

export default App
