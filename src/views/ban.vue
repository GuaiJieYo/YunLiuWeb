<template>
    <div class="banner">
        <img src="/imgs/banner/banner2.jpg" alt="banner">
        <h1>封禁列表</h1>
        <p>此页数据不一定为最新，请以实际为准</p>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.banner {
    width: 100vw;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-align: center;
    overflow: hidden;
    position: relative;

    h1,
    p {
        z-index: 5;
    }

    img {
        filter: brightness(60%);
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>