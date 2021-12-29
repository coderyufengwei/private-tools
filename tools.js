/**
 * 判断微信浏览器
 * @returns {Boolean}
 */
function isWeChat() {
    let str = window.navigator.userAgent.toLowerCase();
    if (str.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}