import { useContext } from "react";

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import Header from "../../src/components/Header";

import { UserContext } from "../../src/context/UserContext";

export default function Profile() {
    const { user, logout } = useContext(UserContext);

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: "#F3F4F6",
            }}
            contentContainerStyle={{
                padding: 20,
            }}
        >
            {/* Título */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                    }}
                >
                    👤
                </Text>

                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#7C3AED",
                        marginLeft: 10,
                    }}
                >
                    Perfil
                </Text>
            </View>

            {/* Card Principal */}
            <View
                style={{
                    backgroundColor: "#FFF",
                    borderRadius: 18,
                    overflow: "hidden",

                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,

                    elevation: 3,

                    marginBottom: 15,
                }}
            >
                <View
                    style={{
                        height: 75,
                        backgroundColor: "#7C3AED",
                    }}
                />

                <View
                    style={{
                        padding: 15,
                    }}
                >
                    <View
                        style={{
                            width: 65,
                            height: 65,
                            borderRadius: 40,
                            backgroundColor: "#FFF",

                            justifyContent: "center",
                            alignItems: "center",

                            marginTop: -48,
                            borderWidth: 3,
                            borderColor: "#FFF",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30,
                            }}
                        >
                            👤
                        </Text>
                    </View>

                    <Text
                        style={{
                            marginTop: 10,
                            fontSize: 22,
                            fontWeight: "bold",
                        }}
                    >
                        {user?.name || "Usuário"}
                    </Text>

                    <Text
                        style={{
                            color: "#6B7280",
                            marginTop: 5,
                        }}
                    >
                        {user?.email ||
                            "usuario@email.com"}
                    </Text>
                </View>
            </View>

            {/* Informações */}
            <View
                style={{
                    backgroundColor: "#FFF",
                    borderRadius: 18,
                    padding: 15,

                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,

                    elevation: 3,
                }}
            >
                {/* Nome */}
                <View
                    style={{
                        paddingBottom: 15,
                        borderBottomWidth: 1,
                        borderBottomColor: "#E5E7EB",
                    }}
                >
                    <Text
                        style={{
                            color: "#9CA3AF",
                            fontSize: 12,
                        }}
                    >
                        👤 Nome
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        {user?.name || "Usuário"}
                    </Text>
                </View>

                {/* Email */}
                <View
                    style={{
                        paddingVertical: 15,
                        borderBottomWidth: 1,
                        borderBottomColor: "#E5E7EB",
                    }}
                >
                    <Text
                        style={{
                            color: "#9CA3AF",
                            fontSize: 12,
                        }}
                    >
                        📧 Email
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        {user?.email ||
                            "usuario@email.com"}
                    </Text>
                </View>

                {/* Telefone */}
                <View
                    style={{
                        paddingTop: 15,
                    }}
                >
                    <Text
                        style={{
                            color: "#9CA3AF",
                            fontSize: 12,
                        }}
                    >
                        📱 Telefone
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        {user?.phone || "Não informado"}
                    </Text>
                </View>
            </View>

            {/* Botão Sair */}
            <TouchableOpacity
                onPress={logout}
                style={{
                    marginTop: 25,

                    borderWidth: 1,
                    borderColor: "#EF4444",

                    borderRadius: 12,
                    padding: 15,

                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        color: "#EF4444",
                        fontWeight: "bold",
                        fontSize: 16,
                    }}
                >
                    Sair da conta
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}