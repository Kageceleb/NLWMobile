import { Image, Text, View, ViewComponent } from "react-native";
import { s } from "./styles";
import { Step } from "../step";

export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}> Veja como funciona:</Text>
            <Step
                title="Encontre Estabelecimentos"
                description="Veja locais perto de você que são parceiros Nearby"
            />
            <Step
                title="Ative o cupom com QR Code"
                description="Veja locais perto de você que são parceiros Nearby"
            />
            <Step
                title="Encontre Estabelecimentos"
                description="Veja locais perto de você que são parceiros Nearby"
            />
        </View>

    )
}