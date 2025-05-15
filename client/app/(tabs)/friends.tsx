import { useTheme } from "@/providers/ThemeProvider";
import { Text, View } from "react-native";

export default function FriendsScreen() {
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
      <Text>Friends Screen</Text>
    </View>
  );
}
