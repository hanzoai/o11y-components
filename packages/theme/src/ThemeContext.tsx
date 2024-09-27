import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import { getCSSVariables, ThemeColors } from "./ThemeColor";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  availableThemes: Theme[];
  currentThemeColors: typeof ThemeColors.light;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    return storedTheme ?? "light";
  });

  const currentThemeColors = useMemo(() => {
    return ThemeColors[theme as keyof typeof ThemeColors];
  }, [theme]);
  const availableThemes: Theme[] = ["light", "dark"];

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.style.cssText = getCSSVariables(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.style.cssText = getCSSVariables(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, availableThemes, currentThemeColors }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
