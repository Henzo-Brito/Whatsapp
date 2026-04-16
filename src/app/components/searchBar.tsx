import { View, TextInput, StyleSheet } from "react-native";
import { Search } from "lucide-react-native";

import { vars } from "@/app/constants/styles";

type Props = {
    placeholder: string
}

export function SearchBar({ placeholder }: Props) {
    return (
        <View style={styles.container}>
            <Search size={18} strokeWidth={3} color={vars.colors.white2} />

            <TextInput
                placeholder={placeholder}
                showSoftInputOnFocus={false}
                placeholderTextColor={vars.colors.white2}
                style={styles.search}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: vars.colors.black1,
        borderRadius: 40,
        paddingHorizontal: 10,
    },
    search: {
        flex: 1,
        color: vars.colors.white,
        fontSize: 18,
        fontWeight: 600,
        paddingInline: 6,
        paddingBlock: 6,
        marginLeft: 6
    }
})