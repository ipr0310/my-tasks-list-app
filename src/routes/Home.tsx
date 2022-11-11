import { Text, Button } from "react-native-paper";
import { View } from "react-native";
import { useAppStore } from "../../store";

export const HomeRoute = () => {
  const themeMode = useAppStore((state) => state.themeMode);
  const toggleThemeMode = useAppStore((state) => state.toggleThemeMode);

  return (
    <View>
      <Text
        variant="bodyLarge"
        style={{ marginBottom: 20, textAlign: "center" }}
      >
        Home
      </Text>

      <Button mode="contained" onPress={toggleThemeMode}>
        Toogle Theme {themeMode === "dark" ? "🌙" : "🌞"}
      </Button>
    </View>
  );
};
