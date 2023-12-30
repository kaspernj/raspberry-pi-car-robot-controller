import {getClient} from "../current-client"
import {View} from "react-native"
import {useCallback} from "react"
import {Button, PaperProvider, Text} from "react-native-paper"

export default function ConnectScreen({navigation, route}) {
  const client = getClient()
  const onMotorsPressed = useCallback(() => {
    navigation.navigate("Motors")
  })

  return (
    <PaperProvider>
      <View>
        <Text>Controller {client.host}:{client.port}</Text>
      </View>
      <Button mode="contained" onPress={onMotorsPressed}>
        Motors
      </Button>
    </PaperProvider>
  )
}
