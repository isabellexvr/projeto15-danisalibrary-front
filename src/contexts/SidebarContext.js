import React, { createContext, useState, useContext } from "react";

const SideBarContext = createContext();

export default function SidebarProvider({ children }) {
  const [sideBar, setSideBar] = useState(false);

  return (
    <SideBarContext.Provider value={{ sideBar, setSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SideBarContext);
  const { sideBar, setSideBar } = context;
  return { sideBar, setSideBar };
}
