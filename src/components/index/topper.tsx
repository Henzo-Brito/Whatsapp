import { StyleSheet, View } from "react-native";
import { Pastes, SearchBar } from "../all";

import { vars } from "@/constants/styles";

export function Topper(){
    return (<View style={ styles.container}>
        <SearchBar placeholder="Pesquise"></SearchBar>
        <Pastes />
    </View>)
}


const styles = StyleSheet.create({
    container:{
        position: "fixed",
        top: 50,
        padding: 10,
        width: "100%"
    },
    search:{
        color: vars.colors.white
    }
})
