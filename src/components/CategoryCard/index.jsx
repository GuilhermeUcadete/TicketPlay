import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export default function CategoryCard({
    title,
    onPress,
}) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}