import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeRoute } from "./src/screens/Home";
import { AlbumsRoute } from "./src/screens/Albums";
import { RecentsRoute } from "./src/screens/Recents";

const Tab = createMaterialBottomTabNavigator();

export const Navigator = () => {
  const {
    colors: { primary },
  } = useTheme();

  return (
    <Tab.Navigator labeled initialRouteName="home" activeColor={primary}>
      <Tab.Screen
        name="home"
        options={{ tabBarLabel: "Home", tabBarIcon: "heart" }}
        component={HomeRoute}
      />

      <Tab.Screen
        name="albums"
        options={{ tabBarLabel: "Albums", tabBarIcon: "album" }}
        component={AlbumsRoute}
      />

      <Tab.Screen
        name="recents"
        options={{ tabBarLabel: "Recents", tabBarIcon: "history" }}
        component={RecentsRoute}
      />

      <Tab.Screen
        name="notifications"
        options={{ tabBarLabel: "Notifications", tabBarIcon: "bell" }}
        component={RecentsRoute}
      />
    </Tab.Navigator>
  );
};
