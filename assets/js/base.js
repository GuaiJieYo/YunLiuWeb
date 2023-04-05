// 定义一个处理 hash 变化的函数
async function handleHashChange() {
    var hash = location.hash.slice(1);
    var route = hash === "/" ? "main" : hash.slice(1);
    const headerLink = document.querySelector(`.header .right a[href='#${hash}']`);
    if (!headerLink) {
        location.hash = '#/404';
    } else {
        document.querySelector('a[active]').removeAttribute('active');
        headerLink.setAttribute('active', '');
    }
    let routeData = await fetch(`/assets/routes/${route}.html`).then(response => response.text());
    console.log(routeData)
}

window.addEventListener('DOMContentLoaded', function () {
    if (!location.hash || location.hash === '#') {
        location.hash = '#/';
    }
    window.addEventListener('hashchange', handleHashChange);
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