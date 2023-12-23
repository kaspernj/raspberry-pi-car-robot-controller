import {Dialog, ActivityIndicator, Portal} from "react-native-paper"

export default function LoadingIndicator() {
  return (
    <Portal>
      <Dialog dismissable={false} visible>
        <Dialog.Content>
          <ActivityIndicator />
        </Dialog.Content>
      </Dialog>
    </Portal>
  )
}
