import { Appearance } from "react-native";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default the 'localStorage' is used
    }
  )
);
