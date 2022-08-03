<template>
  <div class="title">
    <div class="name">名字</div>
    <div class="tool">...</div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.title {
  padding: 0.4em;
  background-color: #f5f5f5;
  height: 55px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.name {
  flex: 1;
  font-size: 0.7rem;
}
.tool {
  margin: auto;
}
</style>
