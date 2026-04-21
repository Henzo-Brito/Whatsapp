import { TouchableOpacity, View, Text, StyleSheet} from "react-native";
import { LucideIcon } from "lucide-react-native";
import { vars } from "@/constants/styles";

type Props = {
    description: string,
    icon: LucideIcon
}


export function CallButton({description, icon: Icon} : Props){
    return(<TouchableOpacity style={styles.container}>
        <View style={styles.icon}>
            <Icon color={vars.colors.white} />
        </View>
        <Text style={styles.text}>{description}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    icon:{
        backgroundColor: vars.colors.color2,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50
    },
    text:{
        color: vars.colors.white2
    }
})

