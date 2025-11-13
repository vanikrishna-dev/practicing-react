import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const Button = () => {
    const {theme, changeTheme} = useContext(ThemeContext); 
    return <center><button className={`m-3 p-3 text-xl rounded-2xl font-bold ${theme === 'light' ? "bg-pink-950 text-white" : "bg-indigo-950 text-indigo-50 border-2 border-indigo-50"} `} onClick={changeTheme}>
        Try changing the theme to {theme ==='light' ? "dark" : "light"}!
        </button></center>
}

export default Button;