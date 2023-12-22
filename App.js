import Client from "./src/client"
import {StatusBar} from "expo-status-bar"
import {View} from "react-native"
import {useCallback, useState} from "react"
import {Appbar, Button, Dialog, Portal, PaperProvider, Text, TextInput} from "react-native-paper"

export default function App() {
  const [error, setError] = useState(null)
  const [ip, setIp] = useState("")
  const [port, setPort] = useState("")

  const handleMore = () => {
    console.log("handleMore")
  }

  const handleSearch = () => {
    console.log("handleSearch")
  }

  const goBack = () => {
    console.log("goBack")
  }

  const onDismissErrorClicked = useCallback(() => {
    setError(null)
  })

  const onConnectPressed = useCallback(async () => {
    const client = new Client()

    client.setHost(ip)
    client.setPort(port)

    try {
      await client.connect()

      console.log("Client connected")
    } catch (error) {
      setError(error.message)
    }
  })

  return (
    <PaperProvider>
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={goBack} />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="magnify" onPress={handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={handleMore} />
        </Appbar.Header>
        <Text>Open up App.js to start working on your app!</Text>
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
        <TextInput id="ip" label="IP" onChangeText={(text) => setIp(text)} value={ip} />
        <TextInput id="port" label="Port" onChangeText={(text) => setPort(text)} value={port} />
        <Button onPress={onConnectPressed}>
          Connect
        </Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  )
}
