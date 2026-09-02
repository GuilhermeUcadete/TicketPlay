import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        overflow: "hidden",
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,

        elevation: 5,
    },

    image: {
        width: "100%",
        height: 180,
    },

    content: {
        padding: 16,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0F172A",
        marginBottom: 10,
    },

    info: {
        fontSize: 14,
        color: "#64748B",
        marginBottom: 6,
    },

    price: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#2563EB",
        marginTop: 10,
        marginBottom: 15,
    },

    button: {
        backgroundColor: "#2563EB",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});