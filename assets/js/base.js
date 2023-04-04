async function handleHashChange() {
    var hash = location.hash.slice(1);
    const route = hash === "/" ? "main" : hash;
    const headerLink = document.querySelector(`.header .right a[href='#${hash}']`);
    if (!headerLink) {
        // 如果 header 中的链接不存在，则跳转到 404 页面
        location.hash = '#/404';
        return;
    }
    document.querySelector('a[active]').removeAttribute('active');
    headerLink.setAttribute('active', '');
    const data = await fetch(`/assets/routes/${route}.html`).then(response => response.text());
    console.log(data);
}

window.addEventListener('load', function () {
    if (!location.hash) {
        location.hash = '#/';
    }
    window.addEventListener('hashchange', handleHashChange);
});

// 请不要删除这段LOG
console.log(
    '%c Made By GuaiJie %c v0.0.1 ',
    'color: white; background: #0078E7; padding:5px 0;',
    'padding:4px;border:1px solid #0078E7;'
);
console.log("开源地址:https://github.com/GuaiJieYo/YunLiuWeb");
// 请不要删除这段LOG