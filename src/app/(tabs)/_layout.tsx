import { Tabs } from "expo-router"

import { vars } from "../../constants/styles"

import { MessageSquareText, CircleDotDashed } from "lucide-react-native"

export default function LayoutRoot(){
    return(<Tabs
        screenOptions={{
            tabBarStyle: {
                height: 60,
                backgroundColor: vars.colors.black2,
                borderColor:  vars.colors.black2,
                alignItems: "center",
                justifyContent: "space-between"
            }, 
            tabBarLabelStyle: {
                width: 70,
                color: vars.colors.white,
                fontSize: 12
            },
            headerShown: false,
        }}
        >
        <Tabs.Screen name="index" 
            options={{
                title: "conversas",
                tabBarIcon: ({color, size}) => (
                    <MessageSquareText color={vars.colors.white} size={20} />
                ),
            }}
        />
        
        <Tabs.Screen name="status" 
            options={{
                title: "Status",
                tabBarIcon: ({color, size}) => (
                    <CircleDotDashed color={vars.colors.white} size={20} />
                ),
            }}
        />
    </Tabs>)
}