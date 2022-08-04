<template>
  <div class="chatMain">
    <titleVue></titleVue>
    <div class="chatContent"></div>
    <inputBoxVue></inputBoxVue>
  </div>
</template>

<script setup lang="ts">
import titleVue from '@/components/title.vue'
import inputBoxVue from '@/components/inputBox.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params)
</script>
<style scoped>
.chatContent {
  height: 500px;
  width: 100%;
  margin-top: 0px;
}
.chatMain {
  height: 100%;
  background-color: #f5f5f5;
}
</style>
