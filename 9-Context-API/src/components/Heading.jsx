import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const Heading = () => {
  
  const {theme} = useContext(ThemeContext);
  console.log (theme);

    return <h1 className={`text-3xl p-5 text-center font-bold border-4 ${theme === 'light' ? "text-black bg-blue-300 underline border-blue-950" : "text-indigo-200 bg-indigo-950 border-indigo-50"} `}>
        Welcome to Theme Changing App!
      </h1>
} 

export default Heading;