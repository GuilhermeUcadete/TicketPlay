import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    async function loadUser() {
        try {
            const userData = await AsyncStorage.getItem(
                "@ticketplay_user"
            );

            if (userData) {
                setUser(JSON.parse(userData));
            }
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    }

    async function saveUser(userData) {
        try {
            setUser(userData);

            await AsyncStorage.setItem(
                "@ticketplay_user",
                JSON.stringify(userData)
            );
        } catch (error) {
            console.log(error);
        }
    }

    async function logout() {
        try {
            await AsyncStorage.removeItem(
                "@ticketplay_user"
            );

            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider
            value={{
                user,
                saveUser,
                logout,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}