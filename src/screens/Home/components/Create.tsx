import { View } from "react-native";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { ListScreenProps } from "../types";
import { useTasksStore } from "../store";

export const CreateRoute = ({ navigation }: ListScreenProps) => {
  const addTask = useTasksStore((state) => state.addTask);

  const [text, setText] = useState("");

  const submitTask = () => {
    if (!text.trim()) return alert("Invalid field");
    addTask(text);
    setText("");
    alert("Task submitted successfully");
    navigation.goBack();
  };

  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        padding: 25,
      }}
    >
      <TextInput
        mode="outlined"
        label="Name your new task!"
        value={text}
        onChangeText={(text) => setText(text)}
        style={{ marginBottom: 25 }}
      />

      <Button
        icon="plus-circle"
        mode="contained"
        style={{ width: "100%" }}
        onPress={submitTask}
      >
        Add
      </Button>
    </View>
  );
};
