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
import mainLayout from '@/components/mainLayout.vue'
import axios from 'axios'
import { onMounted } from 'vue'
import friendsBar from './friendsBar.vue'

const list = async () => {

  await axios({
    url: 'http://10.6.4.216:10030/friend/friends/1233',
    method: 'get'
    // data: user
  })
    // .post('http://10.6.4.216:10030/user/login', {
    //   account: user.account,
    //   password: user.password
    // })
    .then(function (response) {
      //   console.log(response)
      const data = response.data.data
      console.log(data)

      let temp = []
      for (var i in data) {
        // console.log(i+','+ data[i].friendId)
        temp.push(data[i])
      }
      //   console.log(temp)
      let obj = {
        items: temp
      }
      sessionStorage.setItem('friendsNum',data.length)
      sessionStorage.setItem('friends', JSON.stringify(obj))
    })
  // console.log('58790')
}
// onMounted(list)
</script>
<style scoped>
.container {
  height: 100%;
}
</style>
