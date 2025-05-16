import { fontFamily } from "@/constants/fontFamily";
import { useTheme } from "@/providers/ThemeProvider";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ title }: { title: string }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: fontFamily.base,
  },
  container: {
    position: "absolute",
    top: 60,
  },
});
