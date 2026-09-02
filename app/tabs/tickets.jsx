import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import { useContext } from "react";

import Header from "../../src/components/Header";

import { globalStyles } from "../../src/styles/globalStyles";

import { TicketContext } from "../../src/context/TicketContext";

export default function Tickets() {
    const {
        tickets,
        removeTicket,
        clearTickets,
    } = useContext(TicketContext);

    return (
        <ScrollView style={globalStyles.container}>
            <Header title="🎟️ Meus Ingressos" />

            {tickets.length > 0 && (
                <TouchableOpacity
                    onPress={clearTickets}
                    style={{
                        backgroundColor: "#EF4444",
                        padding: 14,
                        borderRadius: 10,
                        alignItems: "center",
                        marginBottom: 20,
                    }}
                >
                    <Text
                        style={{
                            color: "#FFF",
                            fontWeight: "bold",
                        }}
                    >
                        Limpar Carrinho
                    </Text>
                </TouchableOpacity>
            )}

            {tickets.length === 0 ? (
                <Text>
                    Você ainda não possui ingressos comprados.
                </Text>
            ) : (
                tickets.map((ticket, index) => (
                    <View
                        key={index}
                        style={{
                            backgroundColor: "#FFF",
                            padding: 16,
                            borderRadius: 12,
                            marginBottom: 15,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            {ticket.title}
                        </Text>

                        <Text>
                            📍 {ticket.location}
                        </Text>

                        <Text>
                            📅 {ticket.date}
                        </Text>

                        <Text
                            style={{
                                color: "#2563EB",
                                fontWeight: "bold",
                                marginTop: 8,
                            }}
                        >
                            {ticket.price}
                        </Text>

                        <TouchableOpacity
                            onPress={() => removeTicket(index)}
                            style={{
                                backgroundColor: "#2563EB",
                                padding: 10,
                                borderRadius: 10,
                                alignItems: "center",
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: "#FFF",
                                    fontWeight: "bold",
                                }}
                            >
                                Remover
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))
            )}
        </ScrollView>
    );
}