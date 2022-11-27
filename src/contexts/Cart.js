import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [cart, setCart] = useState([]);

    return (
        <AuthContext.Provider value={{ cart, setCart }}>
            {children}
        </AuthContext.Provider>
    )
}