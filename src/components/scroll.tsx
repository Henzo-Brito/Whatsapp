import { View , Text, StyleSheet, ViewStyle} from "react-native";

import { vars } from "@/constants/styles";

type Props = {
    title: String,
    children: React.ReactNode,
}

export function Scroll({title, children, ...rest}: Props){
    return (<View {...rest}>
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

