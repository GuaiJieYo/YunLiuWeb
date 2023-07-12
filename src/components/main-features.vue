<template>
    <div class="features">
        <h1>我们的特色</h1>
        <p class="smalltext">加入YunLiuCraft服务器,你将会获得与其他服务器截然不同的体验</p>
        <ul class="box">
            <li v-for="(item, index) in FeatureList">
                <i class="iconfont" :class="item.icon"></i>
                <h2 class="title">{{ item.title }}</h2>
                <p>{{ item.text }}</p>
            </li>
            <!-- <li>
                <i class="iconfont icon-fair"></i>
                <h2 class="title">Title</h2>
                <p>Made With Love</p>
            </li>
            <li>
                <i class="iconfont icon-world"></i>
                <h2 class="title">Title</h2>
                <p>Made With Love</p>
            </li>
            <li>
                <i class="iconfont icon-love"></i>
                <h2 class="title">Title</h2>
                <p>Made With Love</p>
            </li>
            <li>
                <i class="iconfont icon-love"></i>
                <h2 class="title">Title</h2>
                <p>Made With Love</p>
            </li> -->
        </ul>
    </div>
</template>
<script setup>
const FeatureList = [
    {
        title: '公平',
        text: '我们有着一套简明而有效的游戏法规。这套游戏法规保护着所有玩家的游戏体验，同时也不会限制玩家“自由”。',
        icon: 'icon-fair'
    },
    {
        title: '自由',
        text: '生存玩家，生电玩家和建筑玩家都可以在这里和谐相处，有野心和能力的玩家甚至可以创建并管理自己的城镇。',
        icon: 'icon-world'
    },
    {
        title: '和谐',
        text: '这个社区里的所有人都是和和睦睦的一家人，时刻友善相处。交流内容也不再仅限于Minecraft，而是还有更多方面的生活讨论。如果遭遇到恶意，欢迎使用反馈系统。',
        icon: 'icon-love'
    },
    {
        title: '敬业',
        text: '本服聚集着一批用爱发电的小伙伴，他们是服务器负责任、有热心并乐于帮助玩家的业余管理。他们会耐心听取玩家的意见，不断改进，共同营造更好的游戏体验。',
        icon: 'icon-admins'
    }
]
</script>
<style lang="less" scoped>
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
        // flex-wrap: wrap;

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
}</style>