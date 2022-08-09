let ws: WebSocket | null = null

export function connect() {
  if (ws) {
    return ws
  } else {
    let uId = JSON.parse(localStorage.getItem('user') as string).id

    ws = new WebSocket(`ws://10.6.4.216:10030/star-chat/websocket/${uId}`)

    ws.onopen = function () {
      console.log('已经连接')
    }
    // ws.onmessage = function (e) {
    //   console.log('message', e.data)
    // }
    ws.onclose = function (e) {
      console.log('close')
    }
    return ws
  }
}

export function disconnect() {
  if (ws) {
    ws.close()
    console.log('关闭连接')
  }
}
