import { useEffect } from "react";
import { useColorScheme } from "nativewind";
import { useAppStore } from "./store";

export const ThemeInitializer = () => {
  const { setColorScheme } = useColorScheme();
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    setColorScheme(theme);
  }, [theme]);

  return null;
};
