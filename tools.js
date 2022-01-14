/**
 * @desc 递归生成树形结构 
 * 
 */
export const getTreeData = (data, pid, pidName = 'parentId', idName = 'id', childrenName = 'children', key) => {
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i][pidName] == pid) {
            data[i].key = data[i][idName];
            data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);
            arr.push(data[i]);
        }
    }

    return arr;

}

/**
 * @desc 获取URL参数
 * @param {*} name
 * @param {*} origin
 */
export const getUrlParams = (name, origin = null) => {
    let url = location.href;
    let temp1 = url.split('?');
    let pram = temp1[1];
    let keyValue = pram.split('&');
    let obj = {};
    for (let i = 0; i < keyValue.length; i++) {
        let item = keyValue[i].split('=');
        let key = item[0];
        let value = item[1];
        obj[key] = value;
    }
    return obj[name];

}

/**
 * @desc 获取URL参数
 * @param {*} name
 * @param {*} origin
 */
export const getUrlParam = (name, origin = null) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = null;
    if (origin == null) {
        r = window.location.search.substr(1).match(reg);
    } else {
        r = origin.substr(1).match(reg);
    }
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

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

/**
 * @desc 字符串大小写转换 
 * @params type 1:首字母大写  2：首页母小写  
 * 3：大小写转换  4：全部大写  5：全部小写 
 */
export const changeCase = function (str, type = 4) {
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
            })
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
            })
        case 3:
            return str.split('').map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase()
                } else {
                    return word.toLowerCase()
                }
            }).join('')
        case 4:
            return str.toUpperCase()
        case 5:
            return str.toLowerCase()
        default:
            return str
    }
}