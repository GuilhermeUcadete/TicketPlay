import { View, Text } from "react-native";
import { globalStyles } from "../src/styles/globalStyles";
import Header from "../src/components/Header";

export default function Tickets() {
    return (
        <View style={globalStyles.container}>
            <Header title="🎟️ Meus Ingressos" />

            <Text>
                Você ainda não possui ingressos comprados.
            </Text>
        </View>
    );
}