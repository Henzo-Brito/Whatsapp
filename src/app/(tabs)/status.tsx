import { Search } from "lucide-react-native";
import { View, ScrollView} from "react-native";

import { Header, Chanells, Carroseul} from "../../components/all";

import { styles } from "./pagesStyle";

export default function Status(){
    return(<View style={styles.page}>
        <Header title={"Atualizações"} icon={Search} />
        <ScrollView>
            <Carroseul text="Status"></Carroseul>
            <Chanells></Chanells>
        </ScrollView>
    </View>)
}
