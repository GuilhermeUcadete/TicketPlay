import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#2563EB",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="movies"
                options={{
                    title: "Filmes",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="film" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="shows"
                options={{
                    title: "Shows",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="musical-notes"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="tickets"
                options={{
                    title: "Ingressos",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="ticket"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="person"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}