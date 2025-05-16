import Header from "@/components/core/ui/texts/Header";
import { useTheme } from "@/providers/ThemeProvider";
import { Text, View } from "react-native";

export default function GameScreen() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.bg,
      }}
    >
      <Header title="Spirit Snap" />
      <Text>Game Screen</Text>
    </View>
  );
}
