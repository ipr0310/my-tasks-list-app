import { Appearance } from "react-native";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";

type ThemeMode = "dark" | "light";

interface AppStore {
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
}

const defaultColorScheme = Appearance.getColorScheme() || "light";

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      themeMode: defaultColorScheme,
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
