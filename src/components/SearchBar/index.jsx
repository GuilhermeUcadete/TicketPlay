import { TextInput } from "react-native";
import { styles } from "./styles";

export default function SearchBar({
    value,
    onChangeText,
}) {
    return (
        <TextInput
            placeholder="Pesquisar shows e filmes..."
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
        />
    );
}