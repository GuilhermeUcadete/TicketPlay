import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";

import { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";

import { styles } from "./styles";

export default function EventCard({
    title,
    location,
    date,
    price,
    image,
}) {
    const { addTicket } = useContext(TicketContext);

    function handleBuyTicket() {
        addTicket({
            title,
            location,
            date,
            price,
            image,
        });

        Alert.alert(
            "🛒 Carrinho",
            `${title} foi adicionado ao carrinho com sucesso!`,
            [
                {
                    text: "Continuar Comprando",
                    style: "cancel",
                },
                {
                    text: "OK",
                },
            ]
        );
    }

    return (
        <View style={styles.card}>
            <Image
                source={image}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.info}>
                    📍 {location}
                </Text>

                <Text style={styles.info}>
                    📅 {date}
                </Text>

                <Text style={styles.price}>
                    {price}
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleBuyTicket}
                >
                    <Text style={styles.buttonText}>
                        Comprar Ingresso
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}