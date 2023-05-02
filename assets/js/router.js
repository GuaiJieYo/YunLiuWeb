// 路由地址
const Routes = {
    "/": "/routes/main.html", // 主页
    "/join": "/routes/join.html", // 加入我们
    "/rule": "/routes/rule.html", // 游戏规则
    "/feedback": "/routes/feedback.html", // 意见反馈
    "/help": "/routes/help.html", // 帮助中心
    undefined: "/404.html", // 404页面
};

// 处理路由
const handleHashChange = async () => {
    // 获取当前hash值
    const hash = location.hash.slice(1) || "/";
    // 获取路由地址
    const routeUrl = Routes[hash] || Routes.undefined;

    // 获取header导航中当前hash值对应的链接
    const headerLink = document.querySelector(`.header .right a[href='#${hash}']`);
    // 获取主体内容
    const main = document.querySelector("main");

    if (headerLink) {
        // 如果header导航中存在当前hash值对应的链接，将其设为“active”
        document.querySelector("[active]").removeAttribute("active");
        headerLink.setAttribute("active", "");
    }

    try {
        // 尝试获取HTML文件内容
        const response = await fetch(routeUrl);
        const htmlContent = await response.text();
        // 将HTML文件内容插入到主体内容中
        main.innerHTML = htmlContent;

        // 查找所有 script 标签的 src 属性
        const regex = /<script.*?src="([^"]*)".*?>/g;
        const matches = htmlContent.matchAll(regex);
        for (const match of matches) {
            const scriptTag = document.querySelector(`script[src='${match[1]}']`);
            if (scriptTag) {
                scriptTag.remove();
            }
            const script = document.createElement("script"); // 创建JS文件
            script.src = match[1]; // 设置JS文件地址
            main.appendChild(script); // 将JS文件插入到主体内容中
        }
    } catch (error) {
        iziToast.show({
            title: "页面请求错误！",
            message: "请检查您的网络",
            position: "topCenter",
            timeout: 3000,
            closeOnClick: true,
            icon: "iconfont icon-warn",
        });
    }
};

// 当DOM加载完成后，添加事件监听器
window.addEventListener("DOMContentLoaded", () => {
    if (!location.hash) {
        // 如果当前hash值不合法，重定向至主页
        location.hash = "#/";
    } else {
        // 如果当前有hash值，执行handleHashChange函数
        handleHashChange();
    }
    // 监听hashchange事件
    window.addEventListener("hashchange", () => {
        handleHashChange();
    });
});