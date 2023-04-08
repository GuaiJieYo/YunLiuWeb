// 路由地址
const Routes = {
    '/': '/routes/main.html',
    '/join': '/routes/join.html',
    '/rule': '/routes/rule.html',
    '/feedback': '/routes/feedback.html',
    '/help': '/routes/help.html',
    '/404': '/404.html'
}

// 处理路由
async function handleHashChange() {
    const hash = location.hash.slice(1);
    const routeUrl = Routes[hash] || Routes['/404'];
    var htmlContent = await getHtmlContent(routeUrl) || null;
    document.querySelector('main').innerHTML = htmlContent;
}

// 获取网页内容
async function getHtmlContent(url) {
    return await fetch(url)
        .then(response => response.text())
        .catch(error => iziToast.show({
            title: '网页获取失败',
            message: '请检查您的网络',
            position: 'topCenter',
            timeout: 3000,
            closeOnClick: true,
            icon: 'iconfont icon-warn'
        }));
}

window.addEventListener('DOMContentLoaded', function () {
    if (!location.hash || location.hash == '#') {
        location.hash == '#/'
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
});