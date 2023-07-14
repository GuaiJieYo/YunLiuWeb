<template>
  <header :class="headerClass">
    <div class="header">
      <router-link to="/" class="left">
        <i class="iconfont icon-cloud"></i>
        <p>YunLiuCraft</p>
      </router-link>
      <div class="right">
        <router-link exact-active-class="active" :to="item.link" v-for="(item, index) in navList" :key="index"
          :href="item.link">
          <i class="iconfont" :class="item.icon"></i>
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </header>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headerClass = ref('') // 头部样式类名，用于控制头部背景

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.body.scrollTop // 获取页面滚动的距离（兼容不同浏览器）
  if (scrollTop > 0) {
    headerClass.value = 'header-bg' // 当滚动距离大于0时，添加背景样式
  } else {
    headerClass.value = '' // 当滚动距离为0时，移除背景样式
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll) // 在组件挂载后添加滚动事件的监听器
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll) // 在组件卸载前移除滚动事件的监听器
})

const navList = [
  { title: '首页', link: '/', icon: 'icon-index' },
  { title: '加入', link: '/join', icon: 'icon-plus' },
  { title: '规则', link: '/rule', icon: 'icon-rule' },
  { title: '帮助', link: '/help', icon: 'icon-help' },
  { title: '反馈', link: '/feedback', icon: 'icon-feedback' }
]
</script>

<style lang="less" scoped>
header {
  width: 100vw;
  height: 80px;
  transition: all .3s;
  position: fixed;
  background: transparent;
  top: 0;
  left: 0;
  z-index: 99;

  .header {
    height: 100%;
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      color: #fff;

      p {
        font-size: 2.3rem;
      }

      i {
        margin-right: 6px;
        font-size: 3rem;
      }
    }

    .right {
      a {
        color: #fff;
        margin: 0 10px;
        font-size: 1.6rem;
        vertical-align: middle;
        position: relative;

        i {
          margin: 0 2px;
        }

        &.active:after {
          display: block;
          width: 90%;
          background-color: #fff;
          height: 2px;
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%);
        }

        &:after {
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

        &:hover:after {
          display: block;
          content: '';
          width: 90%;
          background-color: #fff;
        }
      }
    }
  }
}

.header-bg {
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>