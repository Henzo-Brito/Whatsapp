import { Search } from "lucide-react-native";
import { View } from "react-native";

import { Header, Chanells} from "../../components/all";

import { styles } from "./pagesStyle";

export default function Status(){
    return(<View style={styles.page}>
        <Header title={"Atualizações"} icon={Search} />
        <Chanells></Chanells>
    </View>)
}
