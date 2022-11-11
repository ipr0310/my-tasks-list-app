import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";

type ThemeMode = "dark" | "light";

interface AppStore {
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      themeMode: "light",
      toggleThemeMode: () =>
        set(() => ({
          themeMode: get().themeMode === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "app-storage", // name of item in the storage (must be unique)
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
