import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useAppStore } from "../../store";

export const SettingsRoute = () => {
  const themeMode = useAppStore((state) => state.themeMode);
  const toggleThemeMode = useAppStore((state) => state.toggleThemeMode);

  return (
    <View>
      <Text
        variant="displaySmall"
        style={{ marginBottom: 20, textAlign: "center" }}
      >
        Settings
      </Text>

      <Text style={{ marginBottom: 10, textAlign: "center" }}>
        Theme mode: {themeMode === "dark" ? "Dark" : "Light"}
      </Text>

      <Button mode="contained" onPress={toggleThemeMode}>
        Toggle Theme {themeMode === "dark" ? "🌙" : "🌞"}
      </Button>
    </View>
  );
};
