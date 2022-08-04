<script setup lang="ts">
import searchBar from '@/components/searchBar.vue'
import { ref } from 'vue'
import chatCard from './chatCard.vue'
import { useRouter, useRoute } from 'vue-router'

const chatMain = ref(null)
const router = useRouter()

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
let items = [...Array(10)].map((item, index) => index)
// console.log(items)

const goChat = (id: number) => {
  // console.log(router)
  router.push({ path: `/chat/:${id}`, replace: true })
  selected.value = id
}

const selected = ref(-1)
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
        :key="item"
        @click="() => goChat(item)"
        :class="selected === item ? 'selected' : ''"
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
