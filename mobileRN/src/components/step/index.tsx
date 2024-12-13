import { Image, Text, View, ViewComponent } from "react-native";
import { s } from "./styles";

type Props={
    title: string
    description: string
}
export function Step(props:Props) {
    return (
        <View style={s.container}>
            <View style={s.details}>
                <Text style={s.title}> {props.title}</Text>
                <Text style={s.description}> {props.description}</Text>
            </View>
        </View>

    )
}