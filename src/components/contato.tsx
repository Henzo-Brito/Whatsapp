import { vars } from "@/constants/styles";
import { StyleSheet, Image, ImageSourcePropType , Text, View, TouchableOpacity } from "react-native";

import { User } from "@/types/user";

type Props  = User & {
    children?: React.ReactNode,
    width?: number,
    color?: string
}

export function Contato({ width = 83, image, color = vars.colors.white, status=false, contato, message, children }: Props) {
    
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={image} style={[styles.image, status && styles.statusBorder]}/>
            <View style={{width: `${width}%`}}>
                <Text style={[styles.text ,styles.title, {color: color}]}>{contato}</Text>
                <Text style={styles.text}>{message}</Text>
            </View>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 10,
        justifyContent: "space-between"
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: "50%",
    },
    title:{
        fontWeight: 600,
        fontSize: 16
    },
    text:{
        color: vars.colors.white2
    },
    statusBorder:{
        borderWidth: 2,
        padding: 1,
        borderColor: vars.colors.color
    }
})