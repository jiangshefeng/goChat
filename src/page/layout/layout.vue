<!-- <script setup lang="ts"></script>

<template></template>

<style scoped></style> -->

<script setup lang="ts">
import { reactive } from 'vue'

const status = reactive({
  squareUrl:
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
})
</script>

<template>
  <div class="container-layout">
    <nav class="rightNav">
      <div class="item-bottom">
        <div class="header">
          <el-avatar
            shape="square"
            fit="fill"
            :size="45"
            :src="status.squareUrl"
          />
        </div>
        <div class="navItem">1</div>
        <div class="navItem">1</div>
        <div class="navItem">1</div>
        <div class="navItem">1</div>
        <div class="navItem">1</div>
      </div>

      <div class="item-bottom">
        <div class="navItem">1</div>
        <div class="navItem">1</div>
        <div class="navItem">1</div>
      </div>
    </nav>

    <div class="container-main">
      <router-view></router-view>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.rightNav {
  width: 2em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  background-color: black;
  color: #fff;
  margin: 0;
}

.container-layout {
  height: 100%;
  display: flex;
}
.item-bottom {
  margin: 1em 0em;
}
.navItem {
  cursor: pointer;
}

.container-main {
  height: 100%;
  width: 100%;
  margin-top: 0;
}
</style>
