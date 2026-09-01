import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TicketProvider } from "../src/context/TicketContext";

export default function Layout() {
    return (
        <TicketProvider>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "#2563EB",
                }}
            >
                {/* suas Tabs */}
            </Tabs>
        </TicketProvider>
    );
}