<template>
  <div class="login">
    <div class="login-body">
      <div class="login-title">
        <div class="login-title1">登录</div>
        <div style="text-align: center; font-size: x-large; color: #47484a">
          GoChat
        </div>
      </div>

      <form class="login-form">
        <div class="inputname">
          <el-icon><User /></el-icon>
          <el-input v-model="account" placeholder="用户名" clearable />
        </div>
        <div class="inputpassw">
          <el-icon><Lock /></el-icon
          ><el-input
            v-model="password"
            type="password"
            @keyup.enter="submit"
            placeholder="密码"
            show-password
          />
        </div>
        <div class="lg-remember">
          <el-switch
            v-model="remember"
            class="ml-2"
            style="
              --el-switch-on-color: #13ce66;
              --el-switch-off-color: #ff4949;
            "
          />记住用户名与密码
        </div>

        <el-button
          type="primary"
          style="width: 100%; height: 36px; margin-bottom: 10px"
          @click="submit"
          round
          >登录</el-button
        >
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from 'vue'
import axios from 'axios'

import { ElMessage } from 'element-plus'
import router from '@/router/router'
// import resetRouter from '../router/router'
import { url } from 'inspector'
import { method } from 'lodash'
export default {
  setup() {
    const user = reactive({
      account: '',
      password: ''
    })
    const remember = ref('')
    const userStore = useUserStore()
    const submit = async () => {
      if (user.account == '') {
        ElMessage.error('用户名不能为空')
        return
      }
      if (user.password == '') {
        ElMessage.error('密码不能为空')
        return
      }
      await axios({
        url: 'http://10.6.4.216:10030/user/login',
        method: 'post',
        data: user
      })
        // .post('http://10.6.4.216:10030/user/login', {
        //   account: user.account,
        //   password: user.password
        // })
        .then(function (response) {
          if (response.data.msg == 'success') {
            sessionStorage.setItem('loginmsg','success')
            let path = '/chat'
            router.push({ path: path, replace:true })
            return
          } else {
            ElMessage.error(response.data.msg)
            user.password = ''
            // console.log(response.data.msg)
          }
        })
    }
    return {
      ...toRefs(user),
      remember,
      submit
    }
  }
}
</script>

<style scoped>
/* <style> */
.login >>> * {
  margin-top: 0;
}
.login {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(/src/assets/login-bg.jpg);
  background-size: 100% 100%;
  background-color: darkslategrey;
  font-size: medium;
}
.login-body {
  /* padding: 20px; */
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  overflow: hidden;
  width: 300px;
  height: 500px;
}
.login-title {
  height: 70px;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  color: #606266;
}
.login-form {
  height: 430px;
  top: 30%;
  padding: 10px;
}
.lg-remember {
  color: #606266;
  font-size: 10px;
}
.inputname {
  left: 30%;
  top: 30%;
  padding: 10px;
  display: flex;
}
.inputpassw {
  padding: 10px;
  display: flex;
}
.el-icon svg {
  height: 1.5em;
  width: 1.5em;
}
.el-icon {
  --color: inherit;
  height: 1.5em;
  width: 1.5em;
}
</style>
