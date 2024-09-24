import "./App.css";
import { ThemeSwitcher, useTheme } from "@signoz/theme";
import { Button } from "@signoz/button";
import { Typography } from "@signoz/design-tokens";
import { Spacing } from "@signoz/design-tokens";

function App() {
  const { theme, currentThemeColors } = useTheme();

  return (
    <>
      <h1>Theme Switcher and Button</h1>
      <ThemeSwitcher />

      <Button theme={theme} variant="secondary">
        hey
      </Button>

      <h1>Design tokens</h1>
      <p
        style={{
          background: currentThemeColors.TEXT_COLOR,
          letterSpacing: Spacing.MARGIN_10,
          fontSize: Typography.FONTSIZE_3XL,
        }}
      >
        hey
      </p>
    </>
  );
}

export default App;
