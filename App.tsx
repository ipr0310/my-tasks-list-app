import { useMemo } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { paperDarkTheme, paperLightTheme } from "./src/utils/theme";
import { CustomStatusBar } from "./src/components/CustomStatusBar";
import { useAppStore } from "./store";
import { Navigator } from "./Navigator";

export default function App() {
  const themeMode = useAppStore((state) => state.themeMode);

  const paperTheme = useMemo(
    () => (themeMode === "dark" ? paperDarkTheme : paperLightTheme),
    [themeMode]
  );

  const navigationTheme = useMemo(() => {
    const defaultMode = themeMode === "dark" ? DarkTheme : DefaultTheme;

    return {
      ...defaultMode,
      colors: {
        ...defaultMode.colors,
        primary: paperTheme.colors.primary,
        background: paperTheme.colors.background,
      },
    };
  }, [themeMode, paperTheme]);

  return (
    <SafeAreaProvider>
      <CustomStatusBar />

      <PaperProvider theme={paperTheme}>
        <NavigationContainer theme={navigationTheme}>
          <Navigator />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
