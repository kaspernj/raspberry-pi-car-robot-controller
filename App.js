import {StatusBar} from "expo-status-bar"
import {StyleSheet, Text, View} from "react-native"
import TextInput from "./src/components/text-input"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function App() {
  return (
    <View style={styles.container}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <Text>Open up App.js to start working on your app!</Text>
      <Form>
        <TextInput label="IP" />
        <TextInput label="Port" />
        <Button className="mt-2" onClick={onConnectClicked}>
          Connect
        </Button>
      </Form>
      <StatusBar style="auto" />
    </View>
  )
}

const onConnectClicked = () => {
  console.log("onConnectClicked")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
