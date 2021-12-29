/**
 * 判断微信浏览器
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

/* 
 *获取URL？后面的参数
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
}