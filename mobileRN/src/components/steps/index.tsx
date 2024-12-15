import { Image, Text, View, ViewComponent } from "react-native";
import { s } from "./styles";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}> Veja como funciona:</Text>
            <Step
                icon={IconMapPin}
                title="Encontre Estabelecimentos"
                description="Veja locais perto de você que são parceiros Nearby"
            />
            <Step
                icon={IconQrcode}
                title="Ative o cupom com QR Code"
                description="Veja locais perto de você que são parceiros Nearby"
            />
            <Step
                icon={IconTicket}
                title="Encontre Estabelecimentos"
                description="Veja locais perto de você que são parceiros Nearby"
            />
        </View>

    )
}