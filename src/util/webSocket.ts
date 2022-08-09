import { remove } from '@/util/localStore'

let ws: WebSocket | null = null

export function connect() {
  if (ws) {
    console.log('ws is already connected')
    return ws
  } else {
    let uId = JSON.parse(localStorage.getItem('user') as string).id

    ws = new WebSocket(`ws://10.6.4.216:10030/star-chat/websocket/${uId}`)
    console.log('正在连接')

    ws.onopen = function () {
      console.log('已经连接')
    }
    // ws.onmessage = function (e) {
    //   console.log('message', e.data)
    // }
    ws.onclose = function (e) {
      console.log('close')
      remove('user')
      ws = null
    }
    return ws
  }
}

export function disconnect() {
  console.log('remove')

  remove('user')
  if (ws) {
    ws.close()
  }
  ws = null
}
