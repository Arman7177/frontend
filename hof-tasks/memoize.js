function factorial (num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

function memoize(fn) {
    const cache = new Map();

    return function (value) {
        if (cache.has(value)) {            
            return cache.get(value);
        }
        const result = fn(value);
        cache.set(value, result);
        return result;
    };
}
const foo = memoize(factorial) 
console.log(foo(5)) //120 
console.log(foo(5)) // 120 from Cache;