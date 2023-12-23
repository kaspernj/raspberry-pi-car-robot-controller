import Client from "../client"
import {setClient} from "../current-client"
import LoadingIndicator from "../loading-indicator"
import {StatusBar} from "expo-status-bar"
import {View} from "react-native"
import {useCallback, useState} from "react"
import {Button, Dialog, Portal, PaperProvider, Text, TextInput} from "react-native-paper"

export default function ConnectScreen({navigation}) {
  const [error, setError] = useState(null)
  const [ip, setIp] = useState("192.168.86.253")
  const [port, setPort] = useState("8081")
  const [loading, setLoading] = useState(false)

  const onDismissErrorClicked = useCallback(() => {
    setError(null)
  })

  const onConnectPressed = useCallback(async () => {
    const client = new Client()

    client.setHost(ip)
    client.setPort(port)

    try {
      setLoading(true)
      await client.connect()
      setClient(client)
      navigation.navigate("ControllerInitializer")
    } catch (error) {
      setError(error.message || "Couldn't connect")
    } finally {
      setLoading(false)
    }
  })

  return (
    <PaperProvider>
      <View>
        {loading &&
          <LoadingIndicator />
        }
        {error &&
          <Portal>
            <Dialog visible onDismiss={onDismissErrorClicked}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">{error}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={onDismissErrorClicked}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        }
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput id="ip" label="IP" onChangeText={(text) => setIp(text)} style={{marginTop: "12px"}} value={ip} />
        <TextInput id="port" label="Port" onChangeText={(text) => setPort(text)} style={{marginTop: "12px"}} value={port} />
        <Button mode="contained" onPress={onConnectPressed} style={{marginTop: "12px"}}>
          Connect
        </Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  )
}
