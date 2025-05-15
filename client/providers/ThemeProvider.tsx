import { Colors } from "@/constants/Colors";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

type themes = "light" | "dark";

interface ThemeProps {
  theme: themes;
  colors: typeof Colors.light;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be inside ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<themes>(
    systemTheme === "dark" ? "dark" : "light"
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors = useMemo(() => Colors[theme], [theme]);

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
