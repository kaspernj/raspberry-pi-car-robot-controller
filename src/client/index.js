export default class Client {
  connect() {
    return new Promise((resolve, reject) => {
      try {
        this.socket = new WebSocket(`ws://${this.host}:${this.port}`)
      } catch (error) {
        reject(error)

        return
      }

      this.socketConnectedResolve = resolve
      this.socketConnectedReject = reject
      this.socket.addEventListener("error", this.onSocketError)
      this.socket.addEventListener("open", this.onSocketOpen)
      this.socket.addEventListener("message", this.onSocketMessage)
    })
  }

  onSocketError(event) {
    console.log("onSocketError", event)

    if (this.socketConnectedReject) {
      this.socketConnectedReject()
      this.socketConnectedReject = undefined
    }
  }

  onSocketMessage(event) {
    console.log("onSocketMessage", event)
  }

  onSocketOpen(event) {
    if (this.socketConnectedResolve) {
      this.socketConnectedResolve()
      this.socketConnectedResolve = undefined
    }

    socket.send("Hello Server!")
  }

  setHost(host) {
    this.host = host
  }

  setPort(port) {
    this.port = port
  }
}
