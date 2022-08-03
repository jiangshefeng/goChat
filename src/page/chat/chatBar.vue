<script setup lang="ts">
import searchBar from '@/components/searchBar.vue'
import { ref } from 'vue'
import chatCard from './chatCard.vue'

const chatMain = ref(null)

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
let items = Array(20)
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
      <chatCard v-for="item in items"></chatCard>
    </div>
  </div>
</template>

<style scoped>
.chatMain {
  margin-top: 0;
  overflow: hidden;
  height: calc(100% - 50px);
}
.chatMain > * {
  margin-top: 0;
}
.container {
  height: 100%;
}
</style>
