import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";

import { styles } from "./styles";

export default function EventCard({
    title,
    location,
    date,
    price,
    image,
}) {
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

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Comprar Ingresso
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}