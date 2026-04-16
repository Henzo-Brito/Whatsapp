import { View, Image , StyleSheet } from "react-native";
import { vars } from "@/app/constants/styles";

type Props = {
    img: Image,
    title: String,
    message: String,
    time: String
}

export function Contato({ img, title, message, time }: Props) {
    return (
        <View style={styles.container}>

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