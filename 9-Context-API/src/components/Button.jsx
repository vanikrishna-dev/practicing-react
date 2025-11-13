import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const Button = () => {
    const {theme, changeTheme} = useContext(ThemeContext); 
    return <button className={`m-3 p-3 text-xl rounded-2xl font-bold ${theme === 'light' ? "bg-black text-white" : "bg-indigo-950 text-indigo-50 border-2 border-indigo-50"} `} onClick={changeTheme}>
        Change Theme 
        </button>
}

export default Button;