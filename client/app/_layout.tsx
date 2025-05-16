import { StatusBar, View } from "react-native";
import { ThemeProvider, useTheme } from "@/providers/ThemeProvider";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { fontFamily } from "@/constants/fontFamily";
function ThemedStack() {
  const { theme, colors } = useTheme();
  const [loaded] = useFonts({
    [fontFamily.base]: require("../assets/fonts/Jua-Regular.ttf"),
  });
  return (
    <>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: colors.bg }}>
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: "transparent" },
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </View>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedStack />
    </ThemeProvider>
  );
}
