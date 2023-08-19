<template>
    <div class="team">
        <h1>我们的团队</h1>
        <p>皮肤头像来自于minotar.net</p>
        <p @click="SkipList" class="skip">点我跳过此列表</p>
        <ul>
            <li v-for="(item, index) in TeamList" :key="index">
                <img v-lazy="'https://minotar.net/helm/' + item.uuid">
                <div>
                    <h2>{{ item.id }}</h2>
                    <small>{{ item.name ? item.name : item.id }}</small>
                    <p>{{ item.info }}</p>
                </div>
            </li>
            <li class="none" v-if="TeamList.length % 3 !== 0"></li>
        </ul>
    </div>
</template>
  
<script setup>
const TeamList = [
    {
        id: 'BananaQwQ',
        name: '蕉小拿',
        uuid: 'a00f79d6057e41e6bd737800d1bca7ec',
        info: '服主 / 吉祥物'
    },
    {
        id: 'MSDNicrosoft',
        uuid: 'a9cb8465413c43ae958487370ae54c34',
        info: '开发'
    },
    {
        id: 'GuaiJie',
        uuid: '73ab86fbfcbb424990067b70e57ac30c',
        info: '开发 / 摸鱼'
    },
    {
        id: 'Yun_mo_an',
        name: '云默安',
        uuid: '8072fec8688f400699ea4e74deeec5d7',
        info: '管理'
    },
    {
        id: 'DDMTDXW',
        uuid: '01e962b9d88c498dadc7bb0e32d6fef2',
        info: '管理'
    },
    {
        id: 'Sparkling_Life',
        name: '枫林',
        uuid: 'a47ab829a6474b04856edc61bc524631',
        info: '管理'
    },
    {
        id: 'ATh0usandYears',
        name: '千秋',
        uuid: '6651c7cf498d4206879c83ef75b64210',
        info: '策划'
    },
    {
        id: 's_weswer',
        uuid: 'b8e4d9c3f8da4949a2969a5350a03f35',
        info: '管理'
    },
    {
        id: 'Qingfeng_Albus',
        name: '星思',
        uuid: 'c7619c99a13e45abb5c537ae34c3ed27',
        info: '管理'
    },
    {
        id: 'bilibili_jieke',
        name: 'jieke',
        uuid: '11f2cb07290a48b29e348be2c85c92dd',
        info: '管理'
    },
    {
        id: 'awashen',
        uuid: 'a204fc1190ff4ce8ade5317a02d4587b',
        info: '管理'
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
        margin: 20px auto;
        width: 70vw;
        overflow: hidden;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        @media (max-width: 1024px) {
            width: 100vw;
        }

        li {
            width: 250px;
            margin: 20px;
            padding: 30px;
            display: flex;
            box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2),
                0 5px 8px 0 rgba(0, 0, 0, .14);
            border-radius: 10px;
            transition: all .3s;

            &.none {
                box-shadow: none;

                @media (max-width: 700px) {
                    display: none;
                }
            }



            &:hover {
                transform: scale(1.05);
            }

            img {
                width: 75px;
                height: 75px;
                border-radius: 5px;
                box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2),
                    0 5px 8px 0 rgba(0, 0, 0, .14);
            }

            div {
                margin: 0 10px;
                text-align: start;

                h2 {
                    font-weight: 600;
                    font-size: 1.3rem;

                    @media (max-width: 320px) {
                        font-size: 1.1rem;
                    }
                }

            }
        }
    }
}
</style>
  