import { Tabs } from "expo-router"

import { vars } from "../../constants/styles"

import { MessageSquareText, CircleDotDashed, Phone,Camera, Search} from "lucide-react-native"
import { Header } from "@/components/header"

import { Topper } from "@/components/all"

export default function LayoutRoot(){
    return(<Tabs
        screenOptions={{
            tabBarStyle: {
                height: 70,
                backgroundColor: vars.colors.black2,
                borderColor:  vars.colors.black2,
                alignItems: "center",
            }, 
            tabBarLabelStyle: {
                width: 70,
                color: vars.colors.white,
                fontSize: 12,
            },
            tabBarItemStyle:{
                marginBlock: 3,
                marginInline: 10
            },
        }}
        >
        <Tabs.Screen name="index" 
            options={{
                title: "Conversas",
                tabBarIcon: ({color, size}) => (
                    <MessageSquareText color={vars.colors.white} size={24} strokeWidth={2.5} />
                    ),
                header: ()=>{return (<>
                    <Header title={"Whatsapp"} icon={Camera} />                    
                    <Topper></Topper>
                </>)}
            }}
        />
        
        <Tabs.Screen name="status" 
            options={{
                title: "Status",
                tabBarIcon: ({color, size}) => (
                    <CircleDotDashed color={vars.colors.white} size={24} strokeWidth={3} />
                ),
                header: ()=>{return (<Header title={"Atualizações"} icon={Search} /> )}
            }}
        />

        <Tabs.Screen name="chamadas" 
            options={{
                title: "Chamadas",
                tabBarIcon: ({color, size}) => (
                    <Phone color={vars.colors.white} size={24} strokeWidth={2.5} />
                ),
                header: ()=>{return (<Header title={"Chamadas"} icon={Search} />)}
            }}
        />

    </Tabs>)
}