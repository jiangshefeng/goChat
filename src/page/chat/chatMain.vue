<template>
  <div class="chatMain">
    <titleVue></titleVue>
    <div class="chatContent" ref="chatDom">
      <chatMessageVue :message="messages"></chatMessageVue>
    </div>
    <inputBoxVue @send="sendMessage"></inputBoxVue>
  </div>
</template>

<script setup lang="ts">
import titleVue from '@/components/title.vue'
import inputBoxVue from '@/components/inputBox.vue'
import chatMessageVue from './chatMessage.vue'
import { useUserStore, useMessageStore } from '@/store/store'
import { useRoute } from 'vue-router'
import { watch, ref, onMounted, nextTick } from 'vue'
import { connect } from '@/util/websocket'
import { info } from 'console'

export type chatRecord = {
  sendId: string
  recvId: string
  msg: string
  time: number
}

const chatDom = ref(null)
const user = useUserStore()
const route = useRoute()
const messages = ref<chatRecord[]>([])
const sendMessage = async (val: string) => {
  const message: any = {
    sendId: user.id,
    recvId: route.params.id,
    msg: val,
    time: Date.now()
  }
  // 请求操作。。。。
  let ws = connect()

  ws.send(JSON.stringify(message))

  console.log(message)

  messages.value.push(message)

  setMessages(message)

  await nextTick()
  ;(chatDom as any).value.scrollTop = (chatDom as any).value.scrollHeight
}

// 合并本地的消息
const setMessages = (msg: chatRecord) => {
  let x = localStorage.getItem(`${route.params.id}`)
  let Msgs = []
  if (x) {
    Msgs = JSON.parse(x)
  }
  Msgs.push(msg)
  localStorage.setItem(`${route.params.id}`, JSON.stringify(Msgs))
  // console.log(JSON.parse(x))

  // console.log(route.params.id)
}

// 拉起本地的消息
const pullMessages = async () => {
  messages.value = []
  let x = localStorage.getItem(`${route.params.id}`)
  if (x) {
    messages.value = JSON.parse(x)
    // console.log(JSON.parse(x))
  }
  // console.log(chatDom.value.scrollHeight)
  await nextTick()
  if (chatDom.value) {
    ;(chatDom as any).value.scrollTop = (chatDom as any).value.scrollHeight
  }
  // console.log(chatDom.value.scrollTop)
  // console.log(route.params.id)
}
onMounted(async () => {
  pullMessages()
  console.log(messages.value)
})

watch(
  () => route.params.id,
  (val) => {
    if (val === undefined) {
    } else {
      pullMessages()
    }
  }
)
const newMessage = useMessageStore()

newMessage.$subscribe((mutation, state) => {
  console.log('更新了')

  if (state.messages.length > 0) {
    pullMessages()
  }
})
</script>
<style scoped>
.chatContent {
  height: 500px;
  width: 100%;
  margin-top: 0px;
  overflow: auto;
}
.chatMain {
  height: 100%;
  background-color: #f5f5f5;
}
</style>
