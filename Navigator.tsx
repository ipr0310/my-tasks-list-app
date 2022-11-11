import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { HomeRoute } from "./src/routes/Home";
import { AlbumsRoute } from "./src/routes/Albums";
import { RecentsRoute } from "./src/routes/Recents";
import { NotificationsRoute } from "./src/routes/Notifications";

export const Navigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
