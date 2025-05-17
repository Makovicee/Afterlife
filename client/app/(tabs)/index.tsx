import { useTheme } from "@/providers/ThemeProvider";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import Header from "@/components/core/ui/texts/Header";
import { fontFamily } from "@/constants/fontFamily";
import Informant from "@/components/core/drawers/Informant";
import SearchBar from "@/components/core/ui/search/SearchBar";
export default function Index() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.bg,
        paddingTop: 135, // offset from the header
      }}
    >
      <Header title="Inbox" />
      <Informant
        Left={{ title: "Delivered", number: 5 }}
        Right={{ title: "Sent", number: 2 }}
      />
      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        <SearchBar />
      </View>
    </View>
  );
}
