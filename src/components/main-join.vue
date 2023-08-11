<template>
    <div class="join">
        <h1>加入我们</h1>
        <p>我们是一个和谐且自由的公益Minecraft服务器,<br>马上开始在这里的旅程吧!</p>
        <small>在游玩之前您需要先阅读我们的<router-link to="/rule">群聊规则</router-link>和<router-link to="/rule">玩家条约</router-link></small>
        <a target="_blank" href="https://dwz.win/a5me" class="join-btn">
            <i class="iconfont icon-qq"></i>
            加入群聊
        </a>
    </div>
</template>
<style lang="less" scoped>
.join {
    text-align: center;
    margin: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1.5rem;
    }

    a {
        border-bottom: solid 1px;
        color: #000;
    }

    .join-btn {
        margin-top: 10px;
        padding: 10px;
        font-size: 3rem;
        border: solid 1px;
        border-radius: 20px;
        transition: all .3s;
        cursor: pointer;

        &:hover {
            background-color: #000;
            color: #f9f9f9;
        }
    }
}
</style>