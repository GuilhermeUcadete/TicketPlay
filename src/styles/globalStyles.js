import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
        paddingTop: 20,
    },

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 16,
    },

    subtitle: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.text,
        marginBottom: 12,
    },

    text: {
        fontSize: 16,
        color: colors.text,
    },

    section: {
        marginBottom: 24,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
    },
});
``