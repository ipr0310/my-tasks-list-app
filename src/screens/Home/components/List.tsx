import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import { ListScreenProps } from "../types";
import { useTasksStore } from "../store";

export const ListRoute = ({ navigation }: ListScreenProps) => {
  const tasks = useTasksStore((state) => state.tasks);
  const goToCreatePage = () => navigation.navigate("create");

  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: 25,
      }}
    >
      <Text variant="displaySmall" style={{ textAlign: "center" }}>
        Tasks List
      </Text>

      <View style={{ flex: 1, width: "100%", padding: 10 }}>
        <FlashList
          data={tasks}
          renderItem={({ item }) => <List {...item} />}
          estimatedItemSize={42}
          ListEmptyComponent={
            <Text style={{ textAlign: "center" }}>
              Task list is empty! Start adding more now!
            </Text>
          }
        />
      </View>

      <Button
        icon="plus-circle"
        mode="contained"
        style={{ width: "90%", marginTop: 25 }}
        onPress={goToCreatePage}
      >
        Add a new Task
      </Button>
    </View>
  );
};

interface ListProps {
  id: string;
  label: string;
}

export const List = ({ id, label }: ListProps) => {
  const removeTask = useTasksStore((state) => state.removeTask);

  const deleteTask = () => {
    removeTask(id);
  };

  return (
    <Button
      icon="delete-circle"
      mode="outlined"
      style={{ borderRadius: 10, marginBottom: 8 }}
      onPress={deleteTask}
      contentStyle={{ flexDirection: "row-reverse" }}
    >
      {label}
    </Button>
  );
};
