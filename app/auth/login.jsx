import { useState, useContext } from "react";

import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    Alert,
} from "react-native";

import { router } from "expo-router";

import { UserContext } from "../../src/context/UserContext";

export default function Login() {
    const { saveUser } =
        useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] =
        useState("");

    async function handleLogin() {
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            Alert.alert(
                "Erro",
                "Digite um e-mail válido."
            );

            return;
        }

        if (password.length < 6) {
            Alert.alert(
                "Erro",
                "A senha deve ter pelo menos 6 caracteres."
            );

            return;
        }

        await saveUser({
            name: "Usuário",
            email,
        });

        router.replace("/tabs");
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                padding: 20,
                backgroundColor: "#F8FAFC",
            }}
        >
            <Image
                source={require("../../assets/images/logo.png")}
                style={{
                    width: 250,
                    height: 120,
                    alignSelf: "center",
                    resizeMode: "contain",
                    marginBottom: 30,
                }}
            />

            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                style={{
                    backgroundColor: "#FFFFFF",
                    padding: 15,
                    borderRadius: 12,
                    marginBottom: 15,
                }}
            />

            <TextInput
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{
                    backgroundColor: "#FFFFFF",
                    padding: 15,
                    borderRadius: 12,
                    marginBottom: 20,
                }}
            />

            <TouchableOpacity
                onPress={handleLogin}
                style={{
                    backgroundColor: "#2563EB",
                    padding: 15,
                    borderRadius: 12,
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        color: "#FFFFFF",
                        fontWeight: "bold",
                    }}
                >
                    Entrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() =>
                    router.push("/auth/register")
                }
            >
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 20,
                        color: "#2563EB",
                    }}
                >
                    Criar Conta
                </Text>
            </TouchableOpacity>
        </View>
    );
}