import {getScoundrel} from "../current-client"
import LoadingIndicator from "../loading-indicator"
import {Button, PaperProvider} from "react-native-paper"
import {useState} from "react"
import {View} from "react-native"

export default function ConnectInitializerScreen({navigation, route}) {
  const [loading, setLoading] = useState(false)
  const scoundrel = getScoundrel()

  const onInitializePressed = () => {
    setLoading(true)

    console.log("onInitializePressed")

    const buildHat = scoundrel.import("buildhat")
    const motorA = buildHat.callMethodWithReference("Motor", "A")
    const motorB = buildHat.callMethodWithReference("Motor", "B")
    const motorC = buildHat.callMethodWithReference("Motor", "C")
    const motorD = buildHat.callMethodWithReference("Motor", "D")
  }

  return (
    <PaperProvider>
      <View>
        {loading &&
          <LoadingIndicator />
        }
        <Button mode="contained" onPress={onInitializePressed}>
          Initialize
        </Button>
      </View>
    </PaperProvider>
  )
}
