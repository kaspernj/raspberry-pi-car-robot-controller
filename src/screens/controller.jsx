import {View} from "react-native"
import {Button, PaperProvider, Text} from "react-native-paper"

export default function ConnectScreen({navigation, route}) {
  return (
    <PaperProvider>
      <View>
        <Text>Controller {client.host}:${client.port}</Text>
      </View>
    </PaperProvider>
  )
}
