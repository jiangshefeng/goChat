<template>
  <div class="container">
    <div v-if="result" class="self">
      <div :class="result.self ? `header` : 'header-left'">
        <el-avatar shape="square" fit="fill" :src="result?.headerPic" />
      </div>
      <div :class="result.self ? `message` : 'message-left'">
        {{ info.text }}
      </div>
    </div>
    <div v-else>
      <div>错误!!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { chatRecord } from '../page/chat/chatMain.vue'
import { useUserStore } from '@/store/store'
import { onMounted, ref } from 'vue'
const props = defineProps<{ info: chatRecord }>()
const result = ref<any | null>(null)
const userStore = useUserStore()

result.value = userStore.chooseUser(props.info.from)
</script>
<style scoped>
.header {
  height: 40px;
  width: 40px;
  order: 2;
  margin-right: 40px;
}
.message {
  margin-top: 0px;
  font-size: 0.6rem;
  margin-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  border-radius: 0.3em;
  order: 1;
  margin-left: auto;
  background-color: rgb(81, 226, 81);
}
.self {
  display: flex;
  align-items: center;
}
.header-left {
  height: 40px;
  width: 40px;
}
.message-left {
  margin-top: 0px;
  font-size: 0.6rem;
  margin-left: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  border-radius: 0.3em;
  background-color: #fff;
}
</style>
