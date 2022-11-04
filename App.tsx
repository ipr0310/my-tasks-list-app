import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppStore } from "./store";
import { ThemeInitializer } from "./ThemeInitializer";

export default function App() {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);

  return (
    <SafeAreaView>
      <ThemeInitializer />

      <View className="h-full items-center justify-center dark:bg-slate-800">
        <Text className="mb-5 dark:text-white">Hello world</Text>

        <TouchableOpacity onPress={setTheme}>
          <Text className="dark:text-white border-2 dark:border-white px-20 py-4 rounded-xl mb-5">
            Try clicking me!
            {` ${theme === "dark" ? "🌙" : "🌞"}`}
          </Text>
        </TouchableOpacity>

        <Text className="w-full text-center text-2xl dark:text-white capitalize mb-5">
          {theme} mode activated!
        </Text>

        <Text className="ios:text-red-500 android:text-blue-500 dark:text-yellow-300 w-full text-center">
          Open up App.tsx to start working on your app!
        </Text>

        <StatusBar
          style={theme === "dark" ? "light" : "dark"}
          backgroundColor={theme === "dark" ? "#1e293b" : "#ffffff"}
        />
      </View>
    </SafeAreaView>
  );
}
