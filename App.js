import Alert from "react-bootstrap/Alert"
import Client from "./src/client"
import {StatusBar} from "expo-status-bar"
import {StyleSheet, Text, View} from "react-native"
import TextInput from "./src/components/text-input"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {useCallback, useState} from "react"

export default function App() {
  const [error, setError] = useState(null)

  const onDismissErrorClicked = useCallback((e) => {
    e.preventDefault()
    setError(null)
  })

  const onFormSubmit = useCallback(async (e) => {
    e.preventDefault()

    const ip = e.target.elements.ip.value
    const port = e.target.elements.port.value
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
    <View style={styles.container}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <Text>Open up App.js to start working on your app!</Text>
      {error &&
        <Alert onClick={onDismissErrorClicked} style={{cursor: "pointer"}} variant="danger">
          {error}
        </Alert>
      }
      <Form onSubmit={onFormSubmit}>
        <TextInput id="ip" label="IP" />
        <TextInput id="port" label="Port" />
        <Button className="mt-2" type="submit">
          Connect
        </Button>
      </Form>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
