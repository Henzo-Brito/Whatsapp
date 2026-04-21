import { vars } from "@/constants/styles";
import {Text, StyleSheet, Image, ImageBackground, ImageSourcePropType, TouchableOpacity } from "react-native";

type Props = {
    contatoImg: ImageSourcePropType,
    statusImg?: ImageSourcePropType,
    name: string
}

export function Status({contatoImg, statusImg=undefined, name}: Props){
    const styles= StyleSheet.create({
        contato:{
            width: 40,
            height: 40,
            borderRadius: "100%",
            borderWidth: 2,
            borderColor: vars.colors.color
        },
        status:{
            borderRadius: 20,
            width: 80,
            padding: 5,
            height: 140,
            justifyContent: "space-between",
        },
        name:{
            fontSize: 16,
            color: vars.colors.white
        }
    })

    return( 
    <TouchableOpacity style={{borderRadius: 10, margin: 5, overflow: "hidden"}}>
        <ImageBackground source={statusImg} style={styles.status}>
            <Image source={contatoImg} style={styles.contato}></Image>
            <Text style={styles.name}>{name}</Text>
        </ImageBackground>
    </TouchableOpacity>
    )
}
