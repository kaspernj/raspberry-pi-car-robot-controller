import ScoundrelClient from "../../scoundrel/javascript/src/client"

export default class Client {
  connect() {
    return new Promise((resolve, reject) => {
      console.log("Setting resolve and reject")
      this.socketConnectedResolve = resolve
      this.socketConnectedReject = reject
      this.socket = new WebSocket(`ws://${this.host}:${this.port}`)

      console.log("Setting listeners on socket")
      this.socket.addEventListener("close", this.onSocketClose)
      this.socket.addEventListener("error", this.onSocketError)
      this.socket.addEventListener("open", this.onSocketOpen)
      this.socket.addEventListener("message", this.onSocketMessage)

      console.log("Done setting listeners")
    })
  }

  onSocketClose = (event) => {
    console.log("onSocketClose", event)
  }

  onSocketError = (event) => {
    console.log("onSocketError", event)

    if (this.socketConnectedReject) {
      console.log("Reject original promise!")

      this.socketConnectedReject(event)
      this.socketConnectedReject = undefined
    } else {
      console.log("No reject set so not forwarding")
    }
  }

  onSocketMessage = (event) => {
    console.log("onSocketMessage", event)
  }

  onSocketOpen = (event) => {
    if (this.socketConnectedResolve) {
      this.socketConnectedResolve()
      this.socketConnectedResolve = undefined
    }

    this.scoundrel = new ScoundrelClient(this.socket)
  }

  setHost(host) {
    this.host = host
  }

  setPort(port) {
    this.port = port
  }
}
