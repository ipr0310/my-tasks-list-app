import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListRoute } from "./components/List";
import { CreateRoute } from "./components/Create";
import { HomeStackNavigationProps } from "./types";

const Stack = createNativeStackNavigator<HomeStackNavigationProps>();

export const HomeRoute = () => (
  <Stack.Navigator initialRouteName="list">
    <Stack.Screen
      name="list"
      component={ListRoute}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="create"
      component={CreateRoute}
      options={{ title: "Create Task" }}
    />
  </Stack.Navigator>
);
