import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeRoute } from "./src/screens/Home";
import { SettingsRoute } from "./src/screens/Settings";
import { AboutRoute } from "./src/screens/About";

const Tab = createMaterialBottomTabNavigator();

export const Navigator = () => {
  const {
    colors: { primary },
  } = useTheme();

  return (
    <Tab.Navigator labeled initialRouteName="home" activeColor={primary}>
      <Tab.Screen
        name="home"
        options={{ tabBarLabel: "Home", tabBarIcon: "home" }}
        component={HomeRoute}
      />

      <Tab.Screen
        name="settings"
        options={{ tabBarLabel: "Settings", tabBarIcon: "adjust" }}
        component={SettingsRoute}
      />

      <Tab.Screen
        name="about"
        options={{ tabBarLabel: "About", tabBarIcon: "information" }}
        component={AboutRoute}
      />
    </Tab.Navigator>
  );
};
