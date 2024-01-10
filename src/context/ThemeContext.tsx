"use client";

import { createContext, useState, ReactNode } from "react";

type ContextType = {
  theme: "light" | "dark";
  toggle: () => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: "light",
  toggle: () => {},
});

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme") as "light" | "dark";
    return value; // Fix: Add type assertion
  }
};

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => getLocalStorage() || "light"
  );

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  };

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
