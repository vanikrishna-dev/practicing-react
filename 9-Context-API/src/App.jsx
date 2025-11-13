import { useContext } from "react";
import Button from "./components/Button";
import Heading from "./components/Heading";
import ThemeContext from "./store/ThemeContext";


function App() {

  const {theme} = useContext(ThemeContext);

  return (
      <div className={`h-screen ${theme === 'light' ? " bg-pink-100" : "bg-blue-950"}`}>
        <Heading />
        <br />
        <Button />
      </div>
  )
}

export default App
