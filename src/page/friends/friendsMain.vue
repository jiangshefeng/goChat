<template>
  <div class="friendsMain">
    <div class="card">
      <eCard></eCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute,  } from 'vue-router'
import eCard from '../../components/eCard.vue'

// const route = useRoute()
// console.log(route.params.id)
// console.log(route)


</script>

<style scoped>
.friendsMain {
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
}
.card {
  padding: 10px;
  height: 24em;
  width: 15em;
  position: fixed;
  /* border: 1px solid var(--el-border-color-light); */
  /* background-color: var(--el-border-color-light); */
  left: 55%;
  transform: translateX(-50%);
}
</style>