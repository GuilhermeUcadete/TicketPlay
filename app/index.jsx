import { useState } from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
} from "react-native";
import { router } from "expo-router";

import SearchBar from "../src/components/SearchBar";
import CategoryCard from "../src/components/CategoryCard";
import EventCard from "../src/components/EventCard";

import { events } from "../src/data/mockEvents";
import { globalStyles } from "../src/styles/globalStyles";

export default function Home() {
    const [search, setSearch] = useState("");

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ScrollView
            style={globalStyles.container}
            showsVerticalScrollIndicator={false}
        >
            <Image
                source={require("../assets/images/logo.png")}
                style={{
                    width: "100%",
                    height: 180,
                    alignSelf: "center",
                    resizeMode: "contain",
                    marginBottom: 10,
                }}
            />

            <Image
                source={require("../assets/images/banner.png")}
                style={{
                    width: "100%",
                    height: 180,
                    borderRadius: 18,
                    marginBottom: 20,
                }}
            />

            <SearchBar
                value={search}
                onChangeText={setSearch}
            />

            <Text
                style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    marginBottom: 12,
                    color: "#0F172A",
                }}
            >
                Categorias
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    gap: 10,
                    marginBottom: 25,
                }}
            >
                <CategoryCard
                    title="🎬 Filmes"
                    onPress={() => router.push("/movies")}
                />

                <CategoryCard
                    title="🎵 Shows"
                    onPress={() => router.push("/shows")}
                />
            </View>

            <Text
                style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    marginBottom: 15,
                    color: "#0F172A",
                }}
            >
                Em Destaque
            </Text>

            {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                    <EventCard
                        key={event.id}
                        title={event.title}
                        location={event.location}
                        date={event.date}
                        price={event.price}
                        image={event.image}
                    />
                ))
            ) : (
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 20,
                        color: "#64748B",
                        fontSize: 16,
                    }}
                >
                    Nenhum evento encontrado.
                </Text>
            )}
        </ScrollView>
    );
}