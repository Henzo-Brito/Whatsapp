import { canais } from "@/data/canais";
import { chamadas } from "@/data/chamadas";
import { users } from "@/data/user";

import { Contato } from "@/components/contato";
import { vars } from "@/constants/styles";
import { Text, TouchableOpacity } from "react-native";


import { Camera, Phone } from "lucide-react-native";

export const tools = { 
    generatedContacts(): React.ReactNode{
        return users.map(( user, index ) =>{
            return(
            <Contato
                key={index}
                contato={user.contato}
                image={user.image}
                status={user.status}
                message={user.message}
            >  
                <Text style={{fontSize: 15, color: vars.colors.white3}}>
                    {user.time}
                </Text>
            </Contato>
            )
        })
    },
    generatedCanais() : React.ReactNode{
        return canais.map(( canal, index )=>{
            if(canal.status){
                return(
                    <Contato
                        key={index}
                        contato={canal.contato}
                        image={canal.image}
                        status={canal.status}
                        width={65}
                    >
                        <TouchableOpacity style={{ 
                                borderRadius: 20,
                                backgroundColor: vars.colors.color2,
                                padding: 5,
                            }}>
                            <Text style={{color: vars.colors.white, fontSize: 12}}>
                                Seguir
                            </Text>
                        </TouchableOpacity>
                    </Contato>
                )
            }
        })
    },
    generatedChamadas() : React.ReactNode{
        return chamadas.map(( chamada, index )=>{

                return(
                    <Contato
                        key={index}
                        contato={chamada.contato}
                        image={chamada.image}
                        width={65}
                        message={chamada.message}
                        color={chamada.atendeu ? vars.colors.red : vars.colors.green}
                    >
                        <TouchableOpacity style={{ 
                                borderRadius: 20,
                            }}>
                            {chamada.chamada == "vídeo" ? <Camera/> : <Phone/>}
                        </TouchableOpacity>
                    </Contato>
                )
            }
        )
    }
}
