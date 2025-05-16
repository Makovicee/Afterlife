import { useTheme } from "@/providers/ThemeProvider";
import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { fontFamily } from "@/constants/fontFamily";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { colors } = useTheme();

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
  },
});
