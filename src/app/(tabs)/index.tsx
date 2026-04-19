import { View } from "react-native";
import {Camera} from "lucide-react-native"

import { Header, Topper, ViewContato} from "../../components/all";

import { styles } from "./pagesStyle";

export default function Index(){
    return(<View style={styles.page}>
        <Header title={"Whatsapp"} icon={Camera} />
        <Topper></Topper>
        <ViewContato></ViewContato>
    </View>)
}
