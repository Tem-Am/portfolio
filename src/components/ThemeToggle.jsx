import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react";
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme == "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark"); // Add dark class to the document element
        }
        else{
            localStorage.setItem("theme", "light"); // Set default theme to light
            document.documentElement.classList.remove("dark"); // Remove dark class from the document element
        }
    }, []);
    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); // it will stay light mode after the click.
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark"); // it will stay dark mode after the click.
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-300"/>}
        </button>
    );
}