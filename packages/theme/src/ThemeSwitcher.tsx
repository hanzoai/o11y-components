import React from "react";
import { useTheme } from "./ThemeContext";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, availableThemes } = useTheme();

  return (
    <div>
      <h3>Current Theme: {theme}</h3>
      {availableThemes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          style={{ fontWeight: theme === t ? "bold" : "normal" }}
        >
          {t}
        </button>
      ))}
    </div>
  );
};
