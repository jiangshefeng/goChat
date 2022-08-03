<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input2 = ref('')
</script>

<template>
  <div class="searchBar">
    <el-input
      v-model="input2"
      placeholder="搜索"
      :prefix-icon="Search"
      clearable
    />
  </div>
</template>

<style scoped>
.searchBar >>> * {
  margin-top: 0;
}

.searchBar {
  padding: 0.4em;
  background-color: #f7f7f7;
  height: 55px;
}
</style>
