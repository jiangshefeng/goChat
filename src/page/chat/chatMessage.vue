<template>
  <ul>
    <li v-for="(item, index) in message" :key="item.time + index">
      <myMessageBox :info="item"> </myMessageBox>
    </li>
  </ul>
</template>

<script setup lang="ts">
import myMessageBox from '@/components/myMessageBox.vue'
import { chatRecord } from './chatMain.vue'
const props = defineProps<{ message: chatRecord[] }>()
// console.log(props.message, '消息')
</script>
<style scoped>
ul li {
  margin-top: 0.8em;
}
</style>
