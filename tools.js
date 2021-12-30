/**
 * @desc判断微信浏览器
 * @returns {Boolean}
 */
export const isWeixin = () => {
    let str = window.navigator.userAgent.toLowerCase();
    if (str.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
};

/**
 * @desc:获取URL？后面的参数
 * @returns {Object}
 */
export const getRequest = () => {
    let url = location.search;
    let urlRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            urlRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return urlRequest;
};

/**
 * @desc:去除空格 
 * @params type:  1-所有空格  2-前后空格  3-前空格 4-后空格
 */
export const trimy = (str, type = 2) => {
    switch (type) {
        case 1:
            return str.replace(/\s+/g, '')
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, '')
        case 3:
            return str.replace(/(^\s*)/g, '')
        case 4:
            return str.replace(/(\s*$)/g, '')
        default:
            return str
    }
};

/**
 * @desc 浏览器全屏切换
 */
export const fullScreenToggle = () => {
    if (fullScreenEnable()) {
        exitFullScreen();
    } else {
        reqFullScreen();
    }
};

/**
 * @desc 判断浏览器是否全屏
 * @returns {Boolean}
 */
export const fullScreenEnable = () => {
    var isFullscreen =
        document.isFullScreen ||
        document.mozIsFullScreen ||
        document.webkitIsFullScreen;
    return isFullscreen;
};

/**
 * @desc esc监听全屏
 */
export const listenfullScreen = callback => {
    function listen() {
        callback();
    }
    document.addEventListener("fullscreenchange", function () {
        listen();
    });
    document.addEventListener("mozfullscreenchange", function () {
        listen();
    });
    document.addEventListener("webkitfullscreenchange", function () {
        listen();
    });
    document.addEventListener("msfullscreenchange", function () {
        listen();
    });
};

/**
 * @desc 浏览器全屏
 */
export const reqFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    }
};

/**
 * @desc 浏览器退出全屏
 */
export const exitFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
        document.exitFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.mozCancelFullScreen();
    }
};

/**
 * @desc 动态插入css
 */

export const loadStyle = url => {
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
};