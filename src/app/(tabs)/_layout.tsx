import { Tabs } from "expo-router"

import { vars } from "../../constants/styles"

import { MessageSquareText, CircleDotDashed, Phone } from "lucide-react-native"

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
            headerShown: false,
        }}
        >
        <Tabs.Screen name="index" 
            options={{
                title: "Conversas",
                tabBarIcon: ({color, size}) => (
                    <MessageSquareText color={vars.colors.white} size={24} strokeWidth={2.5} />
                ),
            }}
        />
        
        <Tabs.Screen name="status" 
            options={{
                title: "Status",
                tabBarIcon: ({color, size}) => (
                    <CircleDotDashed color={vars.colors.white} size={24} strokeWidth={3} />
                ),
            }}
        />

        <Tabs.Screen name="chamadas" 
            options={{
                title: "Chamadas",
                tabBarIcon: ({color, size}) => (
                    <Phone color={vars.colors.white} size={24} strokeWidth={2.5} />
                ),
            }}
        />

    </Tabs>)
}