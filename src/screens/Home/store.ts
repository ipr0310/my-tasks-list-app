import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";

type task = { id: string; label: string };

interface TasksStore {
  tasks: task[];
  addTask: (label: string) => void;
  removeTask: (id: string) => void;
}

export const useTasksStore = create<TasksStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (label) => {
        const id = new Date().toString() + Math.random().toString();
        return set(() => ({
          tasks: [...get().tasks, { id, label }],
        }));
      },
      removeTask: (id) =>
        set(() => ({
          tasks: get().tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: "tasks-storage", // name of item in the storage (must be unique)
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
