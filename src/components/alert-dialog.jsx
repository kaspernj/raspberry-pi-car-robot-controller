import {Button, Dialog, Portal, Text} from "react-native-paper"

const AlertDialog = ({onDismiss, text}) => {
  return (
    <Portal>
      <Dialog visible onDismiss={onDismiss}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{text}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default AlertDialog