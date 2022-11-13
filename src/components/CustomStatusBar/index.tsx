import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppStore } from "../../../store";

export const CustomStatusBar = () => {
  const themeMode = useAppStore((state) => state.themeMode);

  const backgroundColor =
    themeMode === "dark" ? "rgb(28, 27, 31)" : "rgb(255, 251, 255)";

  return (
    <SafeAreaView style={{ backgroundColor }}>
      <StatusBar
        style={themeMode === "dark" ? "light" : "dark"}
        backgroundColor={backgroundColor}
      />
    </SafeAreaView>
  );
};
