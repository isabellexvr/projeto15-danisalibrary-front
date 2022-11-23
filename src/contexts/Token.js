import React, {createContext, useState, useContext} from "react";

const TokenContext = createContext();

export default function TokenProvider({children}){
    const [token, setToken] = useState("")

    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    );
};

export function useToken(){
    const context = useContext(TokenContext);
    const{token, setToken} = context;
    return ({token, setToken});
}