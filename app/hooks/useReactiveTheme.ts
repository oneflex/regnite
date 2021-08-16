import { useColorScheme } from "react-native";
import { useState, useEffect } from "react";

export function useReactiveTheme<T>(lightTheme: T, darkTheme: T): T {
  const [theme, setTheme] = useState<T>(lightTheme);
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme === "light" ? lightTheme : darkTheme);
  }, [colorScheme]);

  return theme;
}
