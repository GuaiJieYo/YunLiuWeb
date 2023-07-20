<template>
    <div class="welcome">
        <div class="left">
            <h1>YunLiuCraft 欢迎您</h1>
            <p>
                这是一个温馨和谐的服务器,提供了稳定流畅的体验,自从2022开服以来我们努力创建一个环境良好更公平公正的游戏氛围,和玩家们一起度过了很多愉快的时光,在这里的日子将会是你值得回忆的美好.
                我们保证不做影响平衡、破坏公平的行为.服务器暂时不开放白名单,欢迎玩家提出意见或者举报违规行为,请大家自觉遵守游戏规则.
            </p>
        </div>
        <div class="right">
            <img src="/imgs/1.webp" alt="Welcome">
        </div>
    </div>
    <div class="features">
        <h1>我们的特色</h1>
        <p class="smalltext">加入YunLiuCraft服务器,你将会获得与其他服务器截然不同的体验</p>
        <ul class="box">
            <li v-for="(item, index) in FeatureList" :key="index">
                <i class="iconfont" :class="item.icon"></i>
                <h2 class="title">{{ item.title }}</h2>
                <p>{{ item.text }}</p>
            </li>
        </ul>
    </div>
    <div class="features2">
        <h1>多种玩法任你选择</h1>
        <ul>
            <li v-for="(item, index) in FeatureList2" :key="index">
                <h2>{{ item.title }}</h2>
                <img :src="item.img" :alt="item.title">
                <p>{{ item.info }}</p>
            </li>
        </ul>
    </div>
</template>
<script setup>
const FeatureList = [
    {
        title: '公平',
        text: '我们有着一套简明而有效的游戏法规.这套游戏法规保护着所有玩家的游戏体验,同时也不会限制玩家“自由”.',
        icon: 'icon-fair'
    },
    {
        title: '自由',
        text: '生存玩家,生电玩家和建筑玩家都可以在这里和谐相处,有野心和能力的玩家甚至可以创建并管理自己的城镇.',
        icon: 'icon-world'
    },
    {
        title: '和谐',
        text: '这个社区里的所有人都是和和睦睦的一家人,时刻友善相处.交流内容也不再仅限于Minecraft,而是还有更多方面的生活讨论.如果遭遇到恶意,欢迎使用反馈系统.',
        icon: 'icon-love'
    },
    {
        title: '敬业',
        text: '本服聚集着一批用爱发电的小伙伴,他们是服务器负责任、有热心并乐于帮助玩家的业余管理.他们会耐心听取玩家的意见,不断改进,共同营造更好的游戏体验.',
        icon: 'icon-admins'
    }
]

const FeatureList2 = [
    {
        title: '机械动力',
        img: '/imgs/CreateMod.webp',
        info: '你可以使用这个模组来建造复杂的自动化机器,例如发电机、输送带和工业设备等.\n它还引入了新的能源类型,如压缩空气和蒸汽.\n模组为玩家提供了更多深入的技术和机械化玩法,让游戏变得更加有趣和挑战性.'
    },
    {
        title: '红石',
        img: '/imgs/Redstone.webp',
        info: '通过红石线与元件连接,可以创造各种电路和机械装置,如自动门、陷阱、电梯、闹钟、自动农场等.\n掌握红石的运算和传输规则,你可以发挥想象力,创造出丰富多样的装置,让你的世界更有趣.'
    },
    {
        title: '匠神(匠魂3)',
        img: '/imgs/HephaestusMod.webp',
        info: '在此模组中: \n你可以自由地探索出现在天空或是海上亦或是熔岩湖上的岛屿,还能在挖矿或探索时遇到各式的晶洞;\n你可以自由地锻造工具,不再被那单一的工具/武器顶部和脆弱的木柄所束缚,只要你有创意,理论上有上千乃至上万种搭配.'
    }
]
</script>
<style lang="less" scoped>
.welcome {
    padding: 80px 200px;
    display: flex;
    justify-content: space-between;

    .left {
        margin: 0 20px;

        h1 {
            color: #2c3e50;
            font-size: 2rem;
        }

        p {
            margin-top: 30px;
            font-size: 1.1rem;
            color: #6f6f6f;
        }
    }

    .right {
        margin: 0 20px;

        img {
            object-fit: cover;
            border-radius: 10px;
            width: 600px;
        }
    }
}

.features {
    padding: 50px 0;
    text-align: center;

    h1 {
        letter-spacing: 5px;
    }

    .smalltext {
        margin: 8px;
        font-size: 15px;
    }

    .box {
        margin: 20px auto;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;

        li {
            padding: 40px;
            background: #fff;
            margin: 20px;
            transition: all .3s;
            position: relative;
            flex: 1;
            flex-grow: 1;
            align-self: stretch;

            &::after {
                width: 100%;
                height: 2px;
                background: #111;
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                opacity: 0;
                transition: all .3s;
            }

            i {
                font-size: 4rem;
                color: #2c3e50;
            }

            h2 {
                font-size: 1.5rem;
                color: #2c3e50;
            }

            p {
                margin-top: 10px;
                color: #6f6f6f;
            }

            &:hover {
                transform: scale(1.05);
                box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);

                &::after {
                    opacity: 1;
                }
            }
        }
    }
}

.features2 {
    padding: 80px;
    text-align: center;

    ul {
        margin-top: 20px;
        list-style: none;
        display: flex;
        justify-content: space-between;

        li {
            position: relative;

            h2 {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 3rem;
                white-space: nowrap;
                color: #f9f9f9;
                z-index: 1;
                transition: opacity .3s;
            }

            p {
                padding: 10px;
                text-align: start;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                color: #f9f9f9;
                font-size: 1.2rem;
                opacity: 0;
                transition: opacity .3s;
                white-space: pre-wrap;
            }

            &:hover {
                h2 {
                    opacity: 0;
                }

                p {
                    opacity: 1;
                }
            }

            img {
                width: 370px;
                object-fit: cover;
                filter: brightness(.3);
                border-radius: 10px;
            }
        }
    }
}
</style>