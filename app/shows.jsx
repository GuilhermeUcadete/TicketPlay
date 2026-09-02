import {
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import Header from "../src/components/Header";
import EventCard from "../src/components/EventCard";

import { events } from "../src/data/mockEvents";
import { globalStyles } from "../src/styles/globalStyles";

export default function Shows() {
    const shows = events.filter(
        (event) => event.category === "show"
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={globalStyles.container}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{
                        marginBottom: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: "#2563EB",
                            fontWeight: "bold",
                        }}
                    >
                        ← Voltar
                    </Text>
                </TouchableOpacity>

                <Header title="🎵 Shows" />

                <Text
                    style={{
                        fontSize: 16,
                        marginBottom: 20,
                        color: "#64748B",
                    }}
                >
                    Próximos shows
                </Text>

                {shows.map((show) => (
                    <EventCard
                        key={show.id}
                        title={show.title}
                        location={show.location}
                        date={show.date}
                        price={show.price}
                        image={show.image}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}