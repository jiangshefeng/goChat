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
import { useUserStore } from '@/store/store'
import { useRoute } from 'vue-router'
import { watch, ref, onMounted, nextTick } from 'vue'

export type chatRecord = {
  from: number
  to: number
  text: string
  time: number
}

const chatDom = ref(null)
const user = useUserStore()
const route = useRoute()
const messages = ref<chatRecord[]>([])
const sendMessage = async (val: string) => {
  const message = {
    from: user.id,
    to: +route.params.id,
    text: val,
    time: Date.now()
  }
  // 请求操作。。。。
  console.log(message)

  messages.value.push(message)

  setMessages(message)
  await nextTick()
  chatDom.value.scrollTop = chatDom.value.scrollHeight
}

// localStorage.setItem(
//   '0',
//   JSON.stringify([
//     { from: -1, to: 0, text: '你好', time: Date.now() },
//     { from: 0, to: -1, text: '你好', time: Date.now() },
//     { from: -1, to: 0, text: '吃饭了吗', time: Date.now() },
//     { from: 0, to: -1, text: '吃了', time: Date.now() },
//     { from: 0, to: -1, text: '你呢', time: Date.now() },
//     { from: 0, to: -1, text: '你吃的什么', time: Date.now() }
//   ])
// )
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
  chatDom.value.scrollTop = chatDom.value.scrollHeight
  // console.log(chatDom.value.scrollTop)
  // console.log(route.params.id)
}
onMounted(async () => {
  pullMessages()
})

watch(
  () => route.params.id,
  () => {
    pullMessages()
  }
)
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
