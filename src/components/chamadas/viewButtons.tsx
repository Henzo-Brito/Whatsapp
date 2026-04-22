import { View, StyleSheet } from "react-native";

import { CallButton } from "./button";

import { Phone, Heart, CalendarDays, Keyboard} from "lucide-react-native";

export function ViewButtons(){
    return (<View style={styles.container}>
        <CallButton description="Ligar" icon={Phone}></CallButton>
        <CallButton description="Programar" icon={CalendarDays}></CallButton>
        <CallButton description="Teclado" icon={Keyboard}></CallButton>
        <CallButton description="Favoritos" icon={Heart}></CallButton>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center", 
        flexDirection: "row",
        marginInline: 10,
        justifyContent: "space-between"
    }
})

