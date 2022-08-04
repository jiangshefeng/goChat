<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="leftContainer">
      <slot name="left">左</slot>
    </div>
    <div class="rightContainer">
      <slot name="right">右</slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.leftContainer {
  flex: 1;

  border-right: 1px solid rgb(156, 156, 156);
  overflow: hidden;
}
.rightContainer {
  margin-top: 0;
  flex: 5;
}
</style>
