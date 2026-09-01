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

export default function Movies() {
    const movies = events.filter(
        (event) => event.category === "movie"
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

                <Header title="🎬 Filmes" />

                <Text
                    style={{
                        fontSize: 16,
                        marginBottom: 20,
                        color: "#64748B",
                    }}
                >
                    Filmes em cartaz
                </Text>

                {movies.map((movie) => (
                    <EventCard
                        key={movie.id}
                        title={movie.title}
                        location={movie.location}
                        date={movie.date}
                        price={movie.price}
                        image={movie.image}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}