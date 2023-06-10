<template>
    <header>
        <div class="header">
            <a href="#/" class="left">
                <i class="iconfont icon-cloud"></i>
                <p>YunLiuCraft</p>
            </a>
            <div class="right">
                <a active href="#/">
                    <i class="iconfont icon-index"></i>首页
                </a>
                <a href="#/join">
                    <i class="iconfont icon-plus"></i>加入
                </a>
                <a href="#/rule">
                    <i class="iconfont icon-rule"></i>规则
                </a>
                <a href="#/help">
                    <i class="iconfont icon-help"></i>帮助
                </a>
                <a href="#/feedback">
                    <i class="iconfont icon-feedback"></i>反馈
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>

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
    color: #000;
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
    color: #000;
    margin: 0 10px;
    font-size: 1.6rem;
    vertical-align: middle;
    position: relative;
}

header .header .right a[active]:after {
    display: block;
    width: 90%;
    background-color: #000;
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
    background-color: #000;
}
</style>