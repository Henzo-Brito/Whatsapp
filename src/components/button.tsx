import { LucideIcon } from "lucide-react-native";
import { StyleSheet, TouchableOpacity } from "react-native";

import { vars } from "@/constants/styles";

type Props = {
    icon: LucideIcon
}

export function Button({icon: Icon, ...rest}:Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Icon size={28} color={"black"}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        position: "fixed",
        right: 20,
        bottom: 80,
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        padding: 7,
        borderRadius: 14,
        backgroundColor: vars.colors.color
    }
})