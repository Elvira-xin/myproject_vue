<template>
  <div class="login">
    <!-- <p>登录</p> -->
    <div class="container">
        <img src="../assets/海绵宝宝.jpg" alt="" class="avatar">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm" >
      <el-form-item prop="username"  >
        <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="myicon-user"></el-input>
      </el-form-item>
        <el-form-item prop="password" >
        <el-input v-model="loginForm.password" placeholder="密码" prefix-icon="myicon-key"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/login_index.js'
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // alert('ok')
          console.log(this.loginForm)
          login(this.loginForm)
            .then((res) => {
              console.log(res)
              if (res.data.meta.status === 200) {
                localStorage.setItem('myproject_vue', res.data.data.token)
                this.$message.success(res.data.meta.msg)
                this.$router.push({ name: 'home' })
              } else {
                this.$message.warning(res.data.meta.msg)
              }
            })
            .catch(() => {
              this.$message.error('登录失败')
            })
        }
      })
    }
  }
}
</script>
<style lang="less">
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
