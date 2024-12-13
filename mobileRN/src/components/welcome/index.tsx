import { Image, Text, View, ViewComponent } from "react-native";
import { s } from "./styles";

export function Welcome() {
    return (
        <View>
            <Image source={require("@/assets/logo.png")} style={s.logo} />
            <Text style={s.title}> Boas Vindas ao Nearby!</Text>
            <Text style={s.subtitle}>
                Tenha cupons de vantagens para usar em {"\n"}
                seus estabelecimentos favoritos.
            </Text>
        </View>

    )
}