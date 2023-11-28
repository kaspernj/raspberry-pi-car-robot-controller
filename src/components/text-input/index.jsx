import Form from "react-bootstrap/Form"
import {v4 as uuidv4} from "uuid"

export default function CustomTextInput(props) {
  const {id, type, ...restProps} = props
  let actualId

  if (id) {
    actualId = id
  } else {
    actualId = uuidv4()
  }

  return (
    <>
      <Form.Label htmlFor={actualId}>{props.label}</Form.Label>
      <Form.Control id={actualId} type={type || "text"} {...restProps} />
    </>
  )
}
