// 监听页面加载完成事件
window.addEventListener('load', function () {
    hideLoadingBox();
});

function hideLoadingBox() {
    // 获取loading元素
    const loadingbox = document.querySelector('#loading');
    // 设置初始透明度为1
    let opacity = 1;
    // 设置定时器，每50毫秒执行一次
    const timer = setInterval(() => {
        // 当透明度小于等于0.1时，清除定时器，隐藏loading元素，并触发自定义事件
        if (opacity <= 0.1) {
            clearInterval(timer);
            loadingbox.style.display = 'none';
            window.dispatchEvent(new Event('OverLoading'));
        }
        // 设置loading元素透明度
        loadingbox.style.opacity = opacity;
        // 透明度每次减小原来的30%
        opacity -= opacity * 0.3;
    }, 50);
}

// 请不要删除这段LOG
console.log(
    '%c Made By GuaiJie %c v0.0.1 ',
    'color: white; background: #0078E7; padding:5px 0;',
    'padding:4px;border:1px solid #0078E7;'
);
console.log("开源地址:https://github.com/GuaiJieYo/YunLiuWeb");
// 请不要删除这段LOG