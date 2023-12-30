import Logger from "../logger.mjs"
import ScoundrelClient from "../../scoundrel/javascript/src/client"
import ScoundrelWebSocket from "../../scoundrel/javascript/src/client/connections/web-socket/index.mjs"

const logger = new Logger("Raspberry Pi Car Robot Controller / Client")

export default class Client {
  connect() {
    return new Promise((resolve, reject) => {
      logger.log(() => "Setting resolve and reject")
      this.socketConnectedResolve = resolve
      this.socketConnectedReject = reject
      this.webSocket = new WebSocket(`ws://${this.host}:${this.port}`)

      logger.log(() => "Setting listeners on socket")
      this.webSocket.addEventListener("close", this.onSocketClose)
      this.webSocket.addEventListener("error", this.onSocketError)
      this.webSocket.addEventListener("open", this.onSocketOpen)
      this.webSocket.addEventListener("message", this.onSocketMessage)

      logger.log(() => "Done setting listeners")
    })
  }

  onSocketClose = (event) => {
    logger.log(() => ["onSocketClose", event])
  }

  onSocketError = (event) => {
    logger.log(() => ["onSocketError", event])

    if (this.socketConnectedReject) {
      logger.log(() => "Reject original promise!")

      this.socketConnectedReject(event)
      this.socketConnectedReject = undefined
    } else {
      logger.log(() => "No reject set so not forwarding")
    }
  }

  onSocketMessage = (event) => {
    logger.log(() => "onSocketMessage", event)
  }

  onSocketOpen = (event) => {
    if (this.socketConnectedResolve) {
      this.socketConnectedResolve()
      this.socketConnectedResolve = undefined
    }

    this.scoundrelWebSocket = new ScoundrelWebSocket(this.webSocket)
    this.scoundrel = new ScoundrelClient(this.scoundrelWebSocket)
  }

  setHost(host) {
    this.host = host
  }

  setPort(port) {
    this.port = port
  }
}
