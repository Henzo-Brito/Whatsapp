import { View, ScrollView} from "react-native";
import {Camera, MessageSquarePlus} from "lucide-react-native"

import { Header, Topper, Button, Scroll} from "../../components/all";

import { styles } from "./pagesStyle";

import { tools } from "@/tools/generate.tools";

export default function Index(){

    return(<View style={styles.page}>
        <Header title={"Whatsapp"} icon={Camera} />
        <Topper></Topper>
        <Button icon={MessageSquarePlus}/>
        <ScrollView>
            <Scroll title={"Henzo"} marginTop={150}>
                {tools.generatedContacts()}
            </Scroll>
        </ScrollView>

    </View>)
}
