import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const themes = [
    {name: "default", background: "white", font: "black"},
    {name: "dark", background: "#141414", font: "white"}
]


export default function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(themes[0])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    const { theme, setTheme } = context;
    return ({ theme, setTheme });
}