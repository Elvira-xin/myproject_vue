<template>
  <div class="home">
    <!--导航栏-->
    <el-container>
      <div class="el-aside">
        <div class="logo"></div>
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="'1-3'"
          :unique-opened="true"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
        >
          <el-submenu :index="first.id+''" v-for="first in menuList" :key="first.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{first.authName}}</span>
            </template>
            <el-menu-item
              :index="'/home/'+second.path"
              v-for="second in first.children"
              :key="second.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">{{second.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

      <el-container>
        <el-header>
          <span class="myicon myicon-menu toggle-btn" @click="iscollapse = !iscollapse"></span>
          <span class="system-title">电商后台管理系统</span>
          <a href="javascrpt:;" class="welcome">退出</a>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { getLeftMenus } from '@/api/right_index.js'
export default {
  data () {
    return {
      isCollapse: false,
      menuList: []
    }
  },
  mounted () {
    getLeftMenus().then(res => {
      console.log(res)
      this.menuList = res.data.data
    })
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .el-menu {
    width: auto;
  }
  // 如果是展开状态,那么宽度就是200px,如果是合并状态,宽度:auto
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height: 60px;
    background: url("../assets/logo.png");
    background-size: cover;
    background-color: #fff;
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: #fff;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292cf;
    }
  }
  .system-title {
    font-size: 28px;
    color: #fff;
  }
  .welcome {
    color: white;
  }
}
</style>
