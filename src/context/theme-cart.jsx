import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  changeTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "false" ? false : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevValue) => (prevValue === true ? false : true));
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
