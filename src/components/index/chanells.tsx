import { ScrollView, StyleSheet } from "react-native";
import { Contato } from "../all"

export function Chanells (){
    return( <ScrollView style={styles.container}>
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
        <Contato img={require("@/assets/images/user1.jpg")} contato="Henzo" message="" />
    </ScrollView>)
}

const styles = StyleSheet.create({
    container:{
        marginTop: 150
    }
})


