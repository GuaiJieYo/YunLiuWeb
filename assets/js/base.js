// 监听 hash 变化的函数
async function handleHashChange() {
    // 获取当前的 hash 值
    var hash = location.hash.slice(1);
    // 如果 hash 值是 "/"，则将路由设置为 "main"，否则为 hash 值本身
    var route = hash === "/" ? "main" : hash;
    // 输出 hash 值到控制台
    console.log('Hash has changed:' + hash);
    // 获取与当前 hash 值匹配的导航链接
    var headerLink = document.querySelector(`.header .right a[href='#${hash}']`);
    // 如果没有匹配的导航链接，则回到主页面
    if (!headerLink) {
        iziToast.show({
            title: '网页不存在',
            message: '已为您自动跳转到主页',
            position: 'topRight',
            timeout: 3000,
            closeOnClick: true,
            icon: 'iconfont icon-warn'
        });
        location.hash = '#/'
    }
    // 将当前激活状态的导航链接取消激活
    document.querySelector('a[active]').removeAttribute('active');
    // 将当前 hash 值对应的导航链接设置为激活状态
    headerLink.setAttribute('active', '');
    // 获取对应路由的 HTML 内容
    const data = await fetch(`/assets/routes/${route}.html`).then(response => response.text());
    // 输出 HTML 内容到控制台
    console.log(data);
}

// 在 DOMContentLoaded 事件触发后执行的函数
window.addEventListener('DOMContentLoaded', function () {
    // 如果当前没有 hash 值，则将其设置为 "/"
    if (!location.hash) {
        location.hash = '#/';
    }
    // 监听 hash 变化事件，当 hash 值发生变化时，执行 handleHashChange 函数
    window.addEventListener('hashchange', handleHashChange);
    // 初始化页面时，执行一次 handleHashChange 函数
    handleHashChange();
});

// 请不要删除这段LOG
console.log(
    '%c Made By GuaiJie %c v0.0.1 ',
    'color: white; background: #0078E7; padding:5px 0;',
    'padding:4px;border:1px solid #0078E7;'
);
console.log("开源地址:https://github.com/GuaiJieYo/YunLiuWeb");
// 请不要删除这段LOG