import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView>
      <View className="h-full items-center justify-center dark:bg-slate-800">
        <Text className="mb-5 dark:text-white">Hello world</Text>

        <TouchableOpacity onPress={toggleColorScheme}>
          <Text className="dark:text-white border-2 dark:border-white px-20 py-4 rounded-xl mb-5">
            Try clicking me!
            {` ${colorScheme === "dark" ? "🌙" : "🌞"}`}
          </Text>
        </TouchableOpacity>

        <Text className="ios:text-red-500 android:text-blue-500 dark:text-yellow-300 w-full text-center">
          Open up App.js to start working on your app!
        </Text>

        <StatusBar
          style={colorScheme === "dark" ? "light" : "dark"}
          backgroundColor={colorScheme === "dark" ? "#1e293b" : "#ffffff"}
        />
      </View>
    </SafeAreaView>
  );
}
