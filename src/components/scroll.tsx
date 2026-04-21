import { View , Text, StyleSheet, ViewStyle} from "react-native";

import { vars } from "@/constants/styles";

type Props = {
    title: String,
    children: React.ReactNode,
    marginTop?: number
}

export function Scroll({title, children, marginTop}: Props){
    const dynamicStyle: ViewStyle | null = 
    marginTop ? {
        top: marginTop,
        position: "absolute"
    } : null
    
    return (<View style={ dynamicStyle}>
        <Text style={styles.title}>
            {title}
        </Text>
        {children}
    </View>)
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        color: vars.colors.white,
        fontWeight: 600,
        margin: 10
    }
})

