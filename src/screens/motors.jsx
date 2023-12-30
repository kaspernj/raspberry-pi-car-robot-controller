import {getClient} from "../current-client"
import {View} from "react-native"
import {Button, PaperProvider} from "react-native-paper"

export default function ConnectScreen({navigation, route}) {
  const client = getClient()
  const onMotorPressed = (motorLetter) => {
    navigation.navigate("Motor", {motorLetter})
  }

  return (
    <PaperProvider>
      <View>
        {Object.keys(client.motors).map((motorLetter) =>
          <Button key={motorLetter} mode="contained" onPress={() => onMotorPressed(motorLetter)}>
            Motor {motorLetter}
          </Button>
        )}
      </View>
    </PaperProvider>
  )
}
