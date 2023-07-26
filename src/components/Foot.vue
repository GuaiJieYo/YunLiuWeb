<template>
    <div class="Footer">
        <div class="left">
            <div class="logo">
                <i class="iconfont icon-cloud"></i>
                <p>YunLiuCraft</p>
            </div>
            <div class="small">
                享受游戏乐趣，创造奇迹！<br>
                愿你的创造力在 YunLiuCraft 中无限闪耀！
            </div>
            <div class="copy">
                Copyright &copy; 2022 - {{ new Date().getFullYear() }} YunLiuCraft<br>
                网页代码由 <a href="https://www.guaijie.top">GuaiJie</a> 编写(开源),YunLiuCraft 管理组维护
            </div>
        </div>
        <div class="right">
            <a :title="item.title" v-for="(item, index) in List" :href="item.link" :key="item">
                <i class="iconfont" :class="item.icon"></i>
                <img :src="`/imgs/qrcode/${item.title}.png`" :alt="item.title">
            </a>
        </div>
    </div>
</template>

<script setup>
const List = [
    { title: 'BiliBili', link: 'https://space.bilibili.com/436928745', icon: 'icon-bilibili' },
    { title: 'Github', link: 'https://github.com/GuaiJieYo/YunLiuWeb', icon: 'icon-github' },
    { title: 'QQGroup', link: 'https://dwz.win/a5me', icon: 'icon-qq' }
]
</script>

<style lang="less" scoped>
.Footer {
    font-size: 2rem;
    padding: 1.5rem;
    background: #141313;
    color: #f9f9f9;
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;

    .left {
        @media (max-width: 768px) {
            width: 100%;
            margin-top: 20px;
        }

        width: 40%;
        text-align: left;

        .logo {
            display: flex;
        }

        .icon-cloud {
            font-size: 3rem;
            margin-right: 0.5rem;
        }

        .small {
            line-height: 1.5;
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.7);
        }

        .copy {
            font-size: 1.3rem;

            a {
                color: #fff;
                border-bottom: dotted 1px;
            }
        }
    }

    .right {
        @media (max-width: 768px) {
            width: 100%;
            justify-content: center;
        }

        width: 40%;
        display: flex;
        justify-content: flex-end;

        a {
            color: #fff;
            text-align: center;

            i {
                font-size: 3rem;
                margin: 0 30px;
                transition: all .3s;

                &:hover {
                    filter: brightness(.8);
                }
            }

            img {
                @media (max-width: 768px) {
                    display: none;
                }

                image-rendering: pixelated;
                object-fit: cover;
                width: 120px;
                -webkit-user-drag: none;
            }
        }
    }
}
</style>