import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";

type ThemeMode = "dark" | "light";

interface AppStore {
  theme: ThemeMode;
  setTheme: () => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: () =>
        set(() => ({ theme: get().theme === "dark" ? "light" : "dark" })),
    }),
    {
      name: "app-storage", // name of item in the storage (must be unique)
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
