import { vars } from "@/constants/styles";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export function Pastes(){
    return (<View style={styles.container}>
        <TouchableOpacity style={[styles.filt, styles.selected]} className="select">Todos</TouchableOpacity>
        <TouchableOpacity style={[styles.filt, styles.plus]}>
            +
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        position: "fixed",
        top: 110,
        width: "100%",
        gap: 5,
        flexDirection: "row"
    },
    filt:{
        paddingBlock: 4,
        paddingInline: 10,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: vars.colors.black1,
        fontSize: 16,
        fontFamily: "calibri",
        borderStyle: "solid",
        color: vars.colors.white
    },
    plus:{
        paddingInline: 8
    },
    selected:{
        backgroundColor: vars.colors.color2,
        borderColor: vars.colors.color,
    }
})
