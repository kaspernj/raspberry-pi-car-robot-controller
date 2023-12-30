import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ConnectScreen from "./src/screens/connect.jsx"
import ControllerInitializerScreen from "./src/screens/controller-initializer.jsx"
import ControllerScreen from "./src/screens/controller.jsx"
import MotorScreen from "./src/screens/motor.jsx"
import MotorsScreen from "./src/screens/motors.jsx"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Connect"
          component={ConnectScreen}
          options={{title: "Connect"}}
        />
        <Stack.Screen name="ControllerInitializer" component={ControllerInitializerScreen} />
        <Stack.Screen name="Controller" component={ControllerScreen} />
        <Stack.Screen name="Motor" component={MotorScreen} />
        <Stack.Screen name="Motors" component={MotorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App