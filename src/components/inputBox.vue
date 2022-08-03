<template>
  <div class="container">
    <textarea></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
</script>
<style scoped>
.container {
  height: calc(100% - 555px);
  margin-top: 0px;
  width: 100%;
  background-color: aqua;
  overflow: hidden;
  padding: 1.5em 0.5em 2em 0.5em;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
}
textarea {
  resize: none;
  height: 100%;
  width: 100%;
  border: none;
  font-size: 0.6rem;
  background-color: #f5f5f5;
}
textarea:focus-visible {
  outline: none;
}
</style>
