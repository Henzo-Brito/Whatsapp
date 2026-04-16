import {View, Text, StyleSheet} from "react-native";
import { vars } from "@/app/constants/styles";

export function Pastes(){
    return (<View style={styles.container}>
        <Text style={[styles.filt, styles.selected]} className="select">Todos</Text>
        <Text style={[styles.filt, styles.plus]}>
            +
        </Text>
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

        borderStyle: "solid",
        color: vars.colors.white
    },
    plus:{
        paddingInline: 8
    },
    selected:{
        backgroundColor: vars.colors.green2,
        borderColor: vars.colors.green,

    }
})
