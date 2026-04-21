import { ImageSourcePropType } from "react-native"

export type ContactPrimitive = {
    contato: String,
    image: ImageSourcePropType,
    message?: String,
}

export type Canais = ContactPrimitive & {
    status?: boolean
}

export type User = Canais & {
    time?: String,
}

export type Chamadas = ContactPrimitive & {
    chamada: "vídeo" | "voz",
    atendeu: boolean
} 