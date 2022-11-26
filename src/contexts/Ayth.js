import React, {createContext, useState, useContext} from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");

    return (
        <AuthContext.Provider value={{token, setToken, name, setName, imageURL, setImageURL}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useToken(){
    const context = useContext(AuthContext);
    const{token, setToken} = context;
    return ({token, setToken});
}