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
        style={{ marginTop: 25, marginBottom: 25, textAlign: "center" }}
      >
        Settings
      </Text>

      <Text style={{ marginBottom: 10, textAlign: "center" }}>
        Theme mode: {themeMode === "dark" ? "Dark" : "Light"}
      </Text>

      <Button
        mode="contained"
        onPress={toggleThemeMode}
        style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
      >
        Toggle Theme {themeMode === "dark" ? "🌙" : "🌞"}
      </Button>
    </View>
  );
};
