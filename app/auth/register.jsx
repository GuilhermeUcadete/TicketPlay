import { useState, useContext } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";

import { router } from "expo-router";

import { UserContext } from "../../src/context/UserContext";

export default function Register() {
    const { saveUser } = useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister() {
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name.trim()) {
            Alert.alert(
                "Erro",
                "Digite seu nome."
            );
            return;
        }

        if (!emailRegex.test(email)) {
            Alert.alert(
                "Erro",
                "Digite um e-mail válido."
            );
            return;
        }

        if (!phone.trim()) {
            Alert.alert(
                "Erro",
                "Digite seu telefone."
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
            name,
            email,
            phone,
        });

        Alert.alert(
            "Sucesso",
            "Conta criada com sucesso!"
        );

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
            <Text
                style={{
                    fontSize: 28,
                    fontWeight: "bold",
                    marginBottom: 20,
                    textAlign: "center",
                }}
            >
                Criar Conta
            </Text>

            <TextInput
                placeholder="Nome"
                value={name}
                onChangeText={setName}
                style={{
                    backgroundColor: "#FFFFFF",
                    padding: 15,
                    borderRadius: 12,
                    marginBottom: 15,
                }}
            />

            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                    backgroundColor: "#FFFFFF",
                    padding: 15,
                    borderRadius: 12,
                    marginBottom: 15,
                }}
            />

            <TextInput
                placeholder="Telefone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
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
                onPress={handleRegister}
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
                        fontSize: 16,
                    }}
                >
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </View>
    );
}