import { useMemo } from "react";
import {
  Provider as PaperProvider,
  MD3LightTheme,
  MD3DarkTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppStore } from "./store";
import { StatusBar } from "expo-status-bar";
import { Navigator } from "./Navigator";

export default function App() {
  const themeMode = useAppStore((state) => state.themeMode);

  const paperTheme = useMemo(
    () => (themeMode === "dark" ? MD3DarkTheme : MD3LightTheme),
    [themeMode]
  );

  return (
    <>
      <StatusBar
        style={themeMode === "dark" ? "light" : "dark"}
        backgroundColor={
          themeMode === "dark" ? "rgb(30, 26, 29)" : "rgb(255, 251, 255)"
        }
      />

      <PaperProvider theme={paperTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigator />
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}
