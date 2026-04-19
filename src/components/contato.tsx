import { vars } from "@/constants/styles";
import { StyleSheet, Image, ImageSourcePropType , Text, View, TouchableOpacity } from "react-native";

type Props = {
    img: ImageSourcePropType,
    contato: String,
    message: String,
    time?: String,
    status?: boolean
}

export function Contato({ img, status=false, contato, message, time }: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={img} style={[styles.image, status && styles.statusBorder]}/>
            <View style={styles.info}>
                <View style={styles.title}>
                    <Text style={[styles.text ,styles.title]}>{contato}</Text>
                    <Text style={styles.text}>{time}</Text>
                </View>
                <Text style={styles.text}>{message}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-between"
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: "50%",
    },
    title:{
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        color: vars.colors.white,
        fontWeight: 600,
        fontSize: 16
    },
    info:{
        width: "80%"
    },
    text:{
        color: vars.colors.white3
    },
    statusBorder:{
        borderWidth: 2,
        padding: 1,
        borderColor: vars.colors.color
    }
})