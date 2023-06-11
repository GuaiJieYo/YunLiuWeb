<template>
    <div class="carousel">
        <div class="prev">&#10094;</div>
        <div class="text">
            <h1>YunLiuCraft</h1>
            <h2>一个温馨的服务器♥</h2>
        </div>
        <div>
            <img src="https://cdn.ucany.net/acg-img/623b52c1bdf8f.webp" class="active">
            <img src="https://cdn.ucany.net/acg-img/623b52b8754ad.webp">
        </div>
        <div class="next">&#10095;</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.carousel {
    position: relative;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}

.carousel .text {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: #fff;
}

.carousel .text h1 {
    font-size: 5rem;
}

.carousel .text h2 {
    font-size: 2rem;
}

.carousel .text p {
    font-size: 1.5rem;
}

.carousel img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    -webkit-user-drag: none;
    user-select: none;
    background: #fff;
    filter: brightness(60%);
}

.carousel img.active {
    opacity: 1;
}

.carousel .prev,
.carousel .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    z-index: 1;
    transition: all .3s;
}

.carousel .prev:hover,
.carousel .next:hover {
    color: #fff;
}

.carousel .prev {
    left: 20px;
}

.carousel .next {
    right: 20px;
}
</style>