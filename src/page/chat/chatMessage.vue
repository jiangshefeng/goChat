<template>
  <ul>
    <li v-for="item in message">
      <myMessageBox :info="item"> </myMessageBox>
    </li>
  </ul>
</template>

<script setup lang="ts">
import myMessageBox from '@/components/myMessageBox.vue'
import { chatRecord } from './chatMain.vue'
const props = defineProps<{ message: chatRecord[] }>()
</script>
<style scoped>
ul li {
  margin-top: 0.8em;
}
</style>
