import { View, StyleSheet } from "react-native";
import { SearchBar, Pastes} from "../all"

import { vars } from "@/app/constants/styles";

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
