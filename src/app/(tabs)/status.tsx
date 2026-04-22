import { Plus } from "lucide-react-native";
import { View, ScrollView} from "react-native";

import { Carroseul, Scroll, Button} from "../../components/all";

import { styles } from "./pagesStyle";

import { tools } from "@/tools/generate.tools";

export default function Status(){
    return(<View style={styles.page}>
        <ScrollView>
            <Carroseul text="Status"></Carroseul>
            <Scroll title="Canais">
                {tools.generatedCanais()}
            </Scroll>
        </ScrollView>
        <Button icon={Plus}/>
    </View>)
}
