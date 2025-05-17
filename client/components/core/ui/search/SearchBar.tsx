import { useTheme } from "@/providers/ThemeProvider";
import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { fontFamily } from "@/constants/fontFamily";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { colors } = useTheme();
  const [isSpoiler, setIsSpoiler] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isShadowDrop, setIsShadowDrop] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.inputWrapper, { backgroundColor: colors.ghost }]}>
        <Ionicons
          name="search"
          size={20}
          color={colors.ghostText}
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { color: colors.ghostText }]}
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          placeholderTextColor={colors.ghostText}
        />
      </View>
      <View style={styles.iconFilter}>
        <MaterialCommunityIcons
          name="email-fast-outline"
          size={26}
          color={isSpoiler ? colors.primary : colors.ghostText}
          onPress={() => setIsSpoiler((prev) => !prev)}
        />
        <Entypo
          name="stopwatch"
          size={22}
          color={isNew ? colors.primary : colors.ghostText}
          onPress={() => setIsNew((prev) => !prev)}
        />
        <MaterialCommunityIcons
          name="checkbox-multiple-blank-circle"
          size={24}
          color={isShadowDrop ? colors.primary : colors.ghostText}
          onPress={() => setIsShadowDrop((prev) => !prev)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    justifyContent: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 15,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: fontFamily.base,
    textAlign: "center",
    marginRight: 35, //minus icon size
  },
  iconFilter: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    marginRight: 10,
    justifyContent: "flex-end",
  },
});
