const timeout = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

export default timeout
