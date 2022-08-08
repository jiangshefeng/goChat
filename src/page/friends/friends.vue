<template>

<div class="container">
    <mainLayout>
        <template v-slot:left>
            <friendsBar></friendsBar>
        </template>
        <template v-slot:right>
            <router-view></router-view>
        </template>
    </mainLayout>
    
</div>
</template>

<script setup lang="ts">
import mainLayout from '@/components/mainLayout.vue';
import friendsBar from './friendsBar.vue';
</script>
<style scoped>
.container{
    height: 100%;
}
</style>
