<script setup lang="ts">
import mainLayout from '../../components/mainLayout.vue'
import chatBar from './chatBar.vue'
import chatMainVue from './chatMain.vue'
</script>

<template>
  <div class="container">
    <mainLayout>
      <template v-slot:left>
        <chatBar></chatBar>
      </template>
      <template v-slot:right>
        <chatMainVue></chatMainVue>
      </template>
    </mainLayout>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
}
</style>
