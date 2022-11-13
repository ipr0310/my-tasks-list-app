import { useMemo } from "react";
import {
  Provider as PaperProvider,
  MD3LightTheme,
  MD3DarkTheme,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CustomStatusBar } from "./src/components/CustomStatusBar";
import { useAppStore } from "./store";
import { Navigator } from "./Navigator";

export default function App() {
  const themeMode = useAppStore((state) => state.themeMode);

  const paperTheme = useMemo(
    () => (themeMode === "dark" ? MD3DarkTheme : MD3LightTheme),
    [themeMode]
  );

  return (
    <SafeAreaProvider>
      <CustomStatusBar />

      <PaperProvider theme={paperTheme}>
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
