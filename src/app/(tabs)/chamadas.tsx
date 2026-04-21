import { View, ScrollView} from "react-native";
import {Phone, Search} from "lucide-react-native"

import { Header, Button, Scroll,ViewButtons} from "@/components/all";

import { styles } from "./pagesStyle";
import { tools } from "@/tools/generate.tools";

export default function Chamadas(){
    return(<View style={styles.page}>
        <Header title={"Chamadas"} icon={Search} />
        <ScrollView>
            <ViewButtons></ViewButtons>
            <Scroll title="Recentes">
                {tools.generatedChamadas()}
            </Scroll>
        </ScrollView>
        <Button icon={Phone}/>
    </View>)
}
