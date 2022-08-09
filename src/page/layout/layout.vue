<!-- <script setup lang="ts"></script>

<template></template>

<style scoped></style> -->

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { connect, disconnect } from '@/util/websocket'
import { useRouter, useRoute } from 'vue-router'
import { useMessageStore, useUserStore } from '@/store/store'
import { set, get } from '@/util/localStore'
import { ElMessage } from 'element-plus'
const selected = ref('')
const router = useRouter()
const route = useRoute()
const status = reactive({
  squareUrl:
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
})
const items = [
  { path: '/chat', icon: 'pinglun' },
  { path: '/friends', icon: 'shequ' },
  { path: '/collection', icon: 'shouye' }
]

const goRouter = (item: any) => {
  router.push(item.path)
  selected.value = item.path
}
const Messages = useMessageStore()
let ws = connect()
ws.onmessage = function (e) {
  console.log(e.data)
  if (e.data === '您被挤占下线') {
    disconnect()
    ElMessage.error(e.data)
    router.push('/login')
    return
  }

  let data = JSON.parse(e.data)

  // console.log(data, '消息')
  let msg = get(data.sendId)
  if (msg) {
    msg.push(data)
    console.log(msg, '新消息')

    set(data.sendId, msg)
  } else {
    set(data.sendId, [data])
  }
  Messages.setMessages(data)

  let newMessage = get('newMessage')
  if (newMessage) {
    newMessage.push(data)
    set('newMessage', newMessage)
  } else {
    set('newMessage', [data])
  }
}
// const user = useUserStore()

// user.$subscribe((mutation, state) => {
//   if (!state.isOnline) {
//     router.push('login')
//   }
// })
</script>

<template>
  <div class="container-layout">
    <nav class="rightNav">
      <div class="item-bottom">
        <div class="header">
          <el-avatar
            shape="square"
            fit="fill"
            :size="45"
            :src="status.squareUrl"
          />
        </div>
        <div
          class="navItem"
          v-for="item in items"
          @click="() => goRouter(item)"
        >
          <svg
            :class="
              route.fullPath.includes(item.path) ? 'selected icon' : 'icon'
            "
            aria-hidden="true"
          >
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </div>
      </div>

      <div class="item-bottom">
        <div class="navItem"></div>
        <div class="navItem"></div>
        <div class="navItem"></div>
      </div>
    </nav>

    <div class="container-main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.rightNav {
  width: 2em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  background-color: black;
  color: #fff;
  margin: 0;
}

.container-layout {
  height: 100%;
  display: flex;
}
.item-bottom {
  margin: 1em 0em;
}
.navItem {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-main {
  height: 100%;
  width: 100%;
  margin-top: 0;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.selected {
  color: rgb(66, 187, 66);
}
</style>
