// 获取轮播图容器和所有图片元素
var carousel = document.querySelector('.carousel');
var images = carousel.querySelectorAll('img');
// 获取上一张和下一张按钮
var prevBtn = carousel.querySelector('.prev');
var nextBtn = carousel.querySelector('.next');
// 初始化当前显示的图片索引
var currentImageIndex = 0;
// 自动播放定时器
var carouseltimer = null;

// 自动播放函数，每隔3秒切换一张图片
function autoPlay() {
  // 隐藏当前显示的图片
  images[currentImageIndex].classList.remove('active');
  // 切换到下一张图片
  currentImageIndex = (currentImageIndex + 1) % images.length;
  // 显示下一张图片
  images[currentImageIndex].classList.add('active');
}

// 切换图片函数
function switchImage(index) {
  // 隐藏当前显示的图片
  images[currentImageIndex].classList.remove('active');
  // 切换到指定索引的图片
  currentImageIndex = index;
  // 显示指定索引的图片
  images[currentImageIndex].classList.add('active');
}

// 绑定上一张和下一张按钮的点击事件
carousel.addEventListener('click', function (event) {
  if (event.target.matches('.prev')) {
    // 切换到上一张图片
    switchImage((currentImageIndex - 1 + images.length) % images.length);
  } else if (event.target.matches('.next')) {
    // 切换到下一张图片
    switchImage((currentImageIndex + 1) % images.length);
  }
});

// 绑定轮播图容器的鼠标移入移出事件
carousel.addEventListener('mouseover', function (event) {
  if (event.target.matches('.prev, .next')) {
    clearInterval(carouseltimer);
  }
});
carousel.addEventListener('mouseout', function (event) {
  if (event.target.matches('.prev, .next')) {
    carouseltimer = setInterval(autoPlay, 3000);
  }
});

// 开始自动播放
window.addEventListener('OverLoading', () => {
  carouseltimer = setInterval(autoPlay, 3000);
});
