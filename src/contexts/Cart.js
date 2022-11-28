import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [balance, setBalance] = useState(0);

    return (
        <AuthContext.Provider value={{ cart, setCart, counter, setCounter, balance, setBalance }}>
            {children}
        </AuthContext.Provider>
    )
}