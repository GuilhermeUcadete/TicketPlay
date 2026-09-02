import { Stack } from "expo-router";

import { TicketProvider } from "../src/context/TicketContext";
import { UserProvider } from "../src/context/UserContext";

export default function RootLayout() {
    return (
        <UserProvider>
            <TicketProvider>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                />
            </TicketProvider>
        </UserProvider>
    );
}