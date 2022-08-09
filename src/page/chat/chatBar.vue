<script setup lang="ts">
import searchBar from '@/components/searchBar.vue'
import { ref, onMounted, watch } from 'vue'
import chatCard from './chatCard.vue'
import { useRouter, useRoute } from 'vue-router'
import http from '@/util/http/request'
import { useUserStore, useFrindsStore, useMessageStore } from '@/store/store'
import { set } from '@/util/localStore'

const chatMain = ref(null)
const router = useRouter()
const route = useRoute()
const newMessage = useMessageStore()
let changeOverflowIn = () => {
  if (!chatMain.value) {
    return
  } else {
    ;(chatMain.value as any).style.overflow = ' overlay'
  }
}
let changeOverflowOut = () => {
  if (!chatMain.value) {
    return
  } else {
    ;(chatMain.value as any).style.overflow = 'hidden'
  }
}
const items = ref<any[]>([])
// console.log(items)
const userStore = useUserStore()
const friends = useFrindsStore()
const goChat = (id: string) => {
  // console.log(router)
  router.push({ path: `/chat/${id}`, replace: true })
  newMessage.deleteMessages(id)
  // console.log('删除了')

  selected.value = id
}
onMounted(async () => {
  selected.value = route.params.id as string
  if (!userStore.id) {
    userStore.setUserInfo(JSON.parse(localStorage.getItem('user') as string))
  }
  // console.log(
  //   '================================================================',
  //   userStore.id
  // )

  let frinds = await http.get(
    `http://10.6.4.216:10030/friend/friends/${userStore.id}`
  )

  let myFriends = (frinds.data as any[]).filter((v) => {
    return v.friendId !== userStore.id
  })
  friends.setFriends(myFriends)
  set('friends', myFriends)
  // console.log(friends.friends)

  items.value = myFriends as any[]
})
const selected = ref<null | string>(null)
// console.log(route, '路由')

watch(
  () => route.path,
  (val, oldV) => {
    console.log(val)
    if (val.includes('/chat')) {
      router.push({ path: `/chat/${selected.value}`, replace: true })
    }
  }
)
</script>

<template>
  <div class="container">
    <header>
      <searchBar></searchBar>
    </header>
    <div
      class="chatMain"
      @mouseenter="changeOverflowIn"
      @mouseleave="changeOverflowOut"
      ref="chatMain"
    >
      <chatCard
        v-for="(item, index) in items"
        :key="item.id"
        :id="item.friendId"
        @click="() => goChat(item.friendId)"
        :class="[selected === item.friendId ? 'selected' : '']"
      ></chatCard>
    </div>
  </div>
</template>

<style scoped>
.chatMain {
  margin-top: 0;
  overflow: hidden;
  height: calc(100% - 50px);
  background-color: #e8e8e8;
}
.chatMain > * {
  margin-top: 0;
}
.container {
  height: 100%;
}
.selected {
  background-color: #cacaca;
}
</style>
