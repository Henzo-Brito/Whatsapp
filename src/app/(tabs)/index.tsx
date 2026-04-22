import { View, ScrollView} from "react-native";
import { MessageSquarePlus} from "lucide-react-native"

import { Button, Scroll} from "../../components/all";

import { styles } from "./pagesStyle";

import { tools } from "@/tools/generate.tools";

export default function Index(){

    return(<View style={styles.page}>
        <Button icon={MessageSquarePlus}/>
        <ScrollView style={{marginTop: 80}}>
            <Scroll title={"Contatos"}>
                {tools.generatedContacts()}
            </Scroll>
        </ScrollView>
    </View>)
}
