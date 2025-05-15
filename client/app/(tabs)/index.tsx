import { useTheme } from "@/providers/ThemeProvider";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
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
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
