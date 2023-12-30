import AlertDialog from "../components/alert-dialog.jsx"
import {getClient, getScoundrel} from "../current-client"
import LoadingIndicator from "../loading-indicator"
import {Button, PaperProvider} from "react-native-paper"
import {useCallback, useState} from "react"
import {View} from "react-native"

export default function ConnectInitializerScreen({navigation, route}) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const onDismissErrorClicked = useCallback(() => setError(null))
  const client = getClient()
  const scoundrel = getScoundrel()

  const onInitializePressed = async () => {
    setLoading(true)

    try {
      console.log("onInitializePressed")

      const buildHat = await scoundrel.import("buildhat")
      const motorA = await buildHat.callMethodWithReference("Motor", "A")
      const motorB = await buildHat.callMethodWithReference("Motor", "B")
      const motorC = await buildHat.callMethodWithReference("Motor", "C")
      const motorD = await buildHat.callMethodWithReference("Motor", "D")

      client.motors.a = motorA
      client.motors.b = motorB
      client.motors.c = motorC
      client.motors.d = motorD

      navigation.navigate("Controller")
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PaperProvider>
      <View>
        {loading &&
          <LoadingIndicator />
        }
        {error &&
          <AlertDialog onDismiss={onDismissErrorClicked} text={error} title="Alert" />
        }
        <Button mode="contained" onPress={onInitializePressed}>
          Initialize
        </Button>
      </View>
    </PaperProvider>
  )
}
