import {Text} from "react-native"
import Form from "react-bootstrap/Form"

export default function CustomTextInput(props) {
  const {type, ...restProps} = props

  return (
    <>
      <Text>{props.label}</Text>
      <Form.Control type={type || "text"} {...restProps} />
    </>
  )
}
