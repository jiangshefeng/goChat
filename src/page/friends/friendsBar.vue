<template>
  <div class="container">
    <header>
      <searchBar></searchBar>
    </header>
    <div
      class="friendsMain"
      @mouseenter="changeOverflowIn"
      @mouseleave="changeOverflowOut"
      ref="friendsMain"
    >
      <friendsCard
        v-for="(item, index) in items"
        :key="item"
        @click="() => friends(item)"
        :class="selected === item ? 'selected' : ''"
      ></friendsCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import searchBar from '@/components/searchBar.vue'
import friendsCard from './friendsCard.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref } from '@vue/reactivity'

const friendsMain = ref(null)
let changeOverflowIn = () => {
  if (!friendsMain.value) {
    return
  } else {
    ;(friendsMain.value as any).style.overflow = 'overlay'
  }
}
let changeOverflowOut = () => {
  if (!friendsMain.value) {
    return
  } else {
    ;(friendsMain.value as any).style.overflow = 'hidden'
  }
}

let items = [...Array(20)].map((item, index) => index)

const router = useRouter()
const friends = (id: number) => {
  router.push({ path: `/friends/:${id}`, replace: true })
  selected.value = id
}
const selected = ref(-1)
</script>

<style scoped>
.friendsMain{
  margin-top: 0;
  overflow: hidden;
  height: calc(100% - 50px);
  background-color: #e8e8e8;
}
.friendsMain > * {
  margin-top: 0;
}
.container {
  height: 100%;
}
.selected {
  background-color: #cacaca;
}
</style>