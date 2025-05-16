import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "@/providers/ThemeProvider";
export default function TabLayout() {
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#23E0D6",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: colors.ghost,
          margin: 30,
          borderRadius: 20,
          height: 55,
          paddingTop: 6,
          shadowColor: "transparent",
          borderTopWidth: 0,
        },
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "mail" : "mail-outline"}
              color={color}
              size={29}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account-group" : "account-group-outline"}
              color={color}
              size={29}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: "Spirit Snap",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "ghost" : "ghost-outline"}
              color={color}
              size={29}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={29}
            />
          ),
        }}
      />
    </Tabs>
  );
}
