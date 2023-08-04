<template>
    <div class="team">
        <h1>我们的团队</h1>
        <p>皮肤来自于Mojang API</p>
        <!-- 渲染自NameMC(后面会换成SkinView3D) -->
        <p @click="SkipList" class="skip">点我跳过此列表</p>
        <ul>
            <li v-for="(item, index) in TeamList" :key="index">
                <img :src="item.skin">
                <h2>{{ item.id }}</h2>
                <p>{{ item.info }}</p>
            </li>
        </ul>
    </div>
</template>
  
<script setup>
const TeamList = [
    {
        id: 'BananaQwQ',
        info: '[核心组]服主 / 吉祥物',
        skin: '/imgs/skins/BananaQwQ.webp'
    },
    {
        id: 'MSDNicrosoft',
        info: '[核心组]开发',
        skin: '/imgs/skins/MSDNicrosoft.webp'
    },
    {
        id: 'GuaiJie',
        info: '[核心组]开发 / 摸鱼',
        skin: '/imgs/skins/GuaiJie.webp'
    },
    {
        id: 'Yun_mo_an',
        info: '[核心组]管理',
        skin: '/imgs/skins/Yun_mo_an.webp'
    },
    {
        id: 'DDMTDXW',
        info: '[玩法组]',
        skin: '/imgs/skins/DDMTDXW.webp'
    },
    {
        id: 'Sparkling_Life',
        info: '[玩法组]',
        skin: '/imgs/skins/Sparkling_Life.webp'
    },
    {
        id: 'Q1ianQiu',
        info: '策划',
        skin: '/imgs/skins/Q1ianQiu.webp'
    },
    {
        id: 's_weswer',
        info: '[RPG组]',
        skin: '/imgs/skins/s_weswer.webp'
    },
    {
        id: 'Qingfeng_Albus',
        info: '[生存组]',
        skin: '/imgs/skins/Qingfeng_Albus.webp'
    },
    {
        id: 'bilibili_jieke',
        info: '[生存组]',
        skin: '/imgs/skins/Steve.webp' //因为没有渲染出来jieke的皮肤 所以用Steve了XD
    },
    {
        id: 'awashen',
        info: '[生存组]',
        skin: '/imgs/skins/awashen.webp'
    }
]

// 跳过团队成员列表
function SkipList(e) {
    const ElParent = e.target.parentNode
    scrollTo({
        top: ElParent.offsetTop + ElParent.offsetHeight,
        behavior: 'smooth'
    }) // 移动到第一个部分
}
</script>
  
<style lang="less" scoped>
.team {
    text-align: center;

    .skip {
        margin: auto;
        width: fit-content;
        font-size: .9rem;
        border-bottom: solid 1px;
        cursor: pointer;
    }

    h1 {
        font-size: 2rem;
    }

    ul {
        overflow: hidden;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}
</style>
  