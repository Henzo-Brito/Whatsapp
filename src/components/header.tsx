import { EllipsisVertical, LucideIcon } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    title: String,
    icon: LucideIcon,
}

export function Header({title, icon: Icon}: Props){
    return(<View style={styles.container} >
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttons}>
            <Icon />
            <EllipsisVertical></EllipsisVertical>
        </View>
    </View>)
}


import { vars } from "../constants/styles";

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBlock: 20,
        paddingInline: 12,
        color: vars.colors.white,
        position: "absolute",
        top: 0,
        backgroundColor: vars.colors.black2,
        zIndex: 1
    },
    title:{
        color: vars.colors.white,
        fontWeight: 900,
        fontSize: 20
    },
    buttons:{
        flexDirection: "row",
        width: 60,
        alignItems: "center",
        justifyContent: "space-between",
    }
})
