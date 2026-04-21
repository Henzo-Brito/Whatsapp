import { Search, Plus } from "lucide-react-native";
import { View, ScrollView} from "react-native";

import { Header, Carroseul, Scroll, Button} from "../../components/all";

import { styles } from "./pagesStyle";

import { tools } from "@/tools/generate.tools";

export default function Status(){
    return(<View style={styles.page}>
        <Header title={"Atualizações"} icon={Search} />
        <ScrollView>
            <Carroseul text="Status"></Carroseul>
            <Scroll title="Canais">
                {tools.generatedCanais()}
            </Scroll>
        </ScrollView>
        <Button icon={Plus}/>
    </View>)
}
