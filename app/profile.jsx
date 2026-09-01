import { View, Text } from "react-native";
import { globalStyles } from "../src/styles/globalStyles";
import Header from "../src/components/Header";

export default function Profile() {
    return (
        <View style={globalStyles.container}>
            <Header title="👤 Perfil" />

            <Text>Nome: Usuário</Text>
            <Text>Email: usuario@email.com</Text>
        </View>
    );
}