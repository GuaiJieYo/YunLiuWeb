// 路由地址
const Routes = {
    '/': '/routes/main.html', // 主页
    '/join': '/routes/join.html', // 加入我们
    '/rule': '/routes/rule.html', // 游戏规则
    '/feedback': '/routes/feedback.html', // 意见反馈
    '/help': '/routes/help.html', // 帮助中心
    'undefined': '/404.html' // 404页面
};

// 处理路由
const handleHashChange = async () => {
    // 获取当前hash值
    const hash = location.hash.slice(1) || '/';
    // 获取路由地址
    const routeUrl = Routes[hash] || Routes['undefined'];
    // 路由对应的JS文件地址
    var routeJsUrl = routeUrl.replace('routes', 'assets/js').replace('html', 'js');

    // 获取header导航中当前hash值对应的链接
    const headerLink = document.querySelector(`.header .right a[href='#${hash}']`);
    // 获取主体内容
    const main = document.querySelector('main');
    // 获取当前路由对应的JS文件
    const routeScript = document.querySelector('#routescript');

    if (headerLink) {
        // 如果header导航中存在当前hash值对应的链接，将其设为“active”
        document.querySelector('[active]').removeAttribute('active');
        headerLink.setAttribute('active', '');
    }

    if (routeScript) {
        // 如果当前路由对应的JS文件存在，移除它
        routeScript.remove();
    }

    try {
        // 尝试获取HTML文件内容
        const response = await fetch(routeUrl);
        const htmlContent = await response.text();
        // 将HTML文件内容插入到主体内容中
        main.innerHTML = htmlContent;

        // 创建JS文件
        const script = document.createElement('script');
        // 设置JS文件地址
        script.src = routeJsUrl;
        // 设置JS文件的id
        script.id = 'routescript';
        // 将JS文件插入到主体内容中
        main.appendChild(script);
    } catch (error) {
        // 获取HTML文件失败，显示错误信息
        iziToast.show({
            title: '网页获取失败',
            message: '请检查您的网络',
            position: 'topCenter',
            timeout: 3000,
            closeOnClick: true,
            icon: 'iconfont icon-warn'
        });
    }
};

// 获取文件内容
async function getHtmlContent(url) {
    const response = await fetch(url);
    return await response.text();
}

// 当DOM加载完成后，添加事件监听器
window.addEventListener('DOMContentLoaded', () => {
    if (!location.hash) {
        // 如果当前hash值不合法，重定向至主页
        location.hash = '#/';
    } else {
        // 如果当前有hash值，执行handleHashChange函数
        handleHashChange();
    }
    // 监听hashchange事件
    window.addEventListener('hashchange', handleHashChange);
});