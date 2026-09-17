import { View, type ViewProps, useColorScheme } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const backgroundColor = isDark
    ? (darkColor ?? "#121212")
    : (lightColor ?? "#ffffff");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
