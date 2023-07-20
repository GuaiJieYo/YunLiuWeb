<template>
    <div class="team">
        <h1>我们的团队</h1>
        <div class="scroll">
            <ul id="team">
                <li v-for="(item, index) in TeamList" :key="index">
                    <img :src="item.skin">
                    <h2>{{ item.id }}</h2>
                    <p>{{ item.info }}</p>
                </li>
            </ul>
        </div>
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
        info: '[RPG组]',
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
        id: 'jieke',
        info: '[生存组]',
        skin: '/imgs/skins/Steve.webp'
    },
    {
        id: 'shen',
        info: '[生存组]',
        skin: '/imgs/skins/Steve.webp'
    }
]

</script>
  
<style lang="less" scoped>
.team {
    padding: 60px;
    text-align: center;

    .scroll {
        overflow: hidden;
        ul {
            margin-top: 20px;
            list-style: none;
            display: flex;
            animation: ScrollToEnd 25s infinite linear alternate;
        }
    }
}

@keyframes ScrollToEnd {
    from {
        transform: translate(0);
    }
    to {
        transform: translateX(-2415px);
    }
}
</style>
  