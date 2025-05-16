import Header from "@/components/core/ui/texts/Header";
import { useTheme } from "@/providers/ThemeProvider";
import { Switch, Text, View } from "react-native";

export default function GameScreen() {
  const { theme, colors, toggleTheme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.bg,
      }}
    >
      <Header title="Settings" />
      <Text>Settings</Text>
      <Switch
        value={theme === "dark"}
        onValueChange={toggleTheme}
        thumbColor={colors.primary}
      />
    </View>
  );
}
