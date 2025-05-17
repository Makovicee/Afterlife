import { Colors } from "@/constants/Colors";
import { fontFamily } from "@/constants/fontFamily";
import { useTheme } from "@/providers/ThemeProvider";
import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
type drawer = { title: string; number: number };
interface InformantProps {
  Left: drawer;
  Right: drawer;
}

export default function Informant({ Left, Right }: InformantProps) {
  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <View style={style.drawer}>
        <Text style={[style.text, { color: colors.text }]}>{Left.title}</Text>
        <Text style={[style.number, { color: colors.ghostText }]}>
          {Left.number}
        </Text>
      </View>

      <View style={style.drawer}>
        <Text style={[style.text, { color: colors.text }]}>{Right.title}</Text>
        <Text style={[style.number, { color: colors.ghostText }]}>
          {Right.number}/5
        </Text>
        <Entypo
          style={style.icon}
          name="chevron-right"
          size={24}
          color={colors.primary}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  drawer: {
    display: "flex",
    flexDirection: "column",
    fontFamily: fontFamily.base,
    width: 140,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: fontFamily.base,
    fontSize: 20,
    marginBottom: 10,
  },
  number: {
    textAlign: "center",
    fontFamily: fontFamily.base,
    fontSize: 16,
  },
  icon: {
    alignItems: "center",
    position: "absolute",
    left: 95,
  },
});
