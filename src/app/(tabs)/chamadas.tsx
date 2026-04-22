import { View, ScrollView} from "react-native";
import {Phone, } from "lucide-react-native"

import {Button, Scroll,ViewButtons} from "@/components/all";

import { styles } from "./pagesStyle";
import { tools } from "@/tools/generate.tools";

export default function Chamadas(){
    return(<View style={styles.page}>

        <ScrollView>
            <ViewButtons></ViewButtons>
            <Scroll title="Recentes">
                {tools.generatedChamadas()}
            </Scroll>
        </ScrollView>
        <Button icon={Phone}/>
    </View>)
}
