import { Text, View , StyleSheet, ScrollView} from "react-native";

import { Status } from "./status";
import { vars } from "@/constants/styles";


type Props = {
    text: String
}

export function Carroseul({text}: Props){
    
    return(
        <View>
            <Text style={styles.title}>{text}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Status name="Adicionar" contatoImg={require("@i/user1.jpg")} />
                <Status name="Henzo" contatoImg={require("@i/user1.jpg")} statusImg={require("@i/user1.jpg")} />
                <Status name="Henzo" contatoImg={require("@i/user1.jpg")} statusImg={require("@i/user1.jpg")} />
                <Status name="Henzo" contatoImg={require("@i/user1.jpg")} statusImg={require("@i/user1.jpg")} />
                <Status name="Henzo" contatoImg={require("@i/user1.jpg")} statusImg={require("@i/user1.jpg")} />
                <Status name="Henzo" contatoImg={require("@i/user1.jpg")} statusImg={require("@i/user1.jpg")} />
                <Status name="Henzo" contatoImg={require("@i/user1.jpg")} statusImg={require("@i/user1.jpg")} />
                <Status name="Henzo" contatoImg={require("@i/user1.jpg")} statusImg={require("@i/user1.jpg")} />
                <Status name="Henzo" contatoImg={require("@i/user1.jpg")} statusImg={require("@i/user1.jpg")} />
                <Status name="Henzo" contatoImg={require("@i/user1.jpg")} statusImg={require("@i/user1.jpg")} />
            </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    scroll:{
        width: "100%",
    },
    title:{
        color: vars.colors.white,
        fontWeight: 600,
        fontSize: 20,
        margin: 10
    }
})
