<template>
  <header>
    <div class="header">
      <router-link to="/" class="left">
        <i class="iconfont icon-cloud"></i>
        <p>YunLiuCraft</p>
      </router-link>
      <div class="right">
        <router-link exact-active-class="active" :to="item.link" v-for="(item, index) in navList" :key="index" :href="item.link">
          <i class="iconfont" :class="item.icon"></i>{{ item.title }}
        </router-link>
      </div>
    </div>
  </header>
</template>
  
<script setup>
const navList = [
  { title: '首页', link: '/', icon: 'icon-index' },
  { title: '加入', link: '/join', icon: 'icon-plus' },
  { title: '规则', link: '/rule', icon: 'icon-rule' },
  { title: '帮助', link: '/help', icon: 'icon-help' },
  { title: '反馈', link: '/feedback', icon: 'icon-feedback' }
]
</script>

<style scoped>
header {
  width: 100vw;
  height: 80px;
  background: transparent;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: all .3s;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

header .header {
  height: 100%;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .header .left {
  display: flex;
  align-items: center;
  color: #fff;
}

header .header .left p {
  font-size: 2.3rem;
}

header .header .left i {
  margin-right: 6px;
  font-size: 3rem;
}

header .header .right a i {
  margin: 0 2px;
}

header .header .right a {
  color: #fff;
  margin: 0 10px;
  font-size: 1.6rem;
  vertical-align: middle;
  position: relative;
}

header .header .right a.active:after {
  display: block;
  width: 90%;
  background-color: #fff;
  height: 2px;
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
}

header .header .right a:after {
  display: block;
  content: '';
  width: 0;
  height: 2px;
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s;
}

header .header .right a:hover:after {
  display: block;
  content: '';
  width: 90%;
  background-color: #fff;
}
</style>