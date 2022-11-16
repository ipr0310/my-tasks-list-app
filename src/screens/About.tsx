import { View, Image, Linking } from "react-native";
import { Text, Button } from "react-native-paper";

export const AboutRoute = () => (
  <View
    style={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image
      source={require("../assets/thumbnail.png")}
      style={{ width: 120, height: 120, borderRadius: 20, marginBottom: 10 }}
    />

    <Text
      variant="displaySmall"
      style={{ textAlign: "center", marginBottom: 25 }}
    >
      This app was made with ❤️ by IPR0310
    </Text>

    <Button
      icon="github"
      mode="contained"
      onPress={() => Linking.openURL("https://github.com/ipr0310/my-nice-app")}
    >
      View code on Github
    </Button>
  </View>
);
