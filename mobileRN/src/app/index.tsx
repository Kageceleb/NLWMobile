import { Steps } from "@/components/steps"
import { Welcome } from "@/components/welcome"
import { View, Text } from "react-native"

export default function Index() {
    return (
        <View style={{flex: 1}}
        >
            <Welcome />
            <Steps />
        </View>
    )
}