import { View, Text, StyleSheet } from "react-native";
import { Contato } from "../all"

import { vars } from "@/constants/styles";

export function Chanells (){
    return( <View>
        <Text style={styles.title}>Canais</Text>
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato status={true} img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
    </View>)
}

const styles = StyleSheet.create({
    title:{
        color: vars.colors.white,
        padding: 10,
        fontSize: 20,
        fontWeight: 600
    }
})


