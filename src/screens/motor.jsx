import {getClient} from "../current-client"
import {View} from "react-native"
import {PaperProvider, Text} from "react-native-paper"

export default function MotorScreen({navigation, route}) {
  const client = getClient()
  const {motorLetter} = route.params
  const motor = client.motors[motorLetter]

  return (
    <PaperProvider>
      <View>
        <Text>
          Motor {motorLetter}
        </Text>
        <Text>
          {motor ? "Motor found" : "Motor not found"}
        </Text>
      </View>
    </PaperProvider>
  )
}
