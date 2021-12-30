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
}

/**
 *@desc:获取URL？后面的参数
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
 *@desc:去除空格 
 *@params type:  1-所有空格  2-前后空格  3-前空格 4-后空格
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
}