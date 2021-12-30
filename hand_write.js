//函数防抖
//[func 函数,wait 延迟执行毫秒数,immediate true 表立即执行,false 表非立即执行,
//立即执行是触发事件后函数会立即执行，然后n秒内不触发事件才能继续执行函数的效果]
const debounce = function (func, wait, immediate) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
    }
};

//函数节流 [func 函数 wait 延迟执行毫秒数 type 1 表时间戳版，2 表定时器版]
const throttle = function (func, wait, type) {
    if (type === 1) {
        let previous = 0;
    } else if (type === 2) {
        let timeout;
    }
    return function () {
        let context = this;
        let args = arguments;
        if (type === 1) {
            let now = Date.now();
            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        } else if (type === 2) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}