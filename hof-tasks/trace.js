function sum (a,b) {
    return a + b;
}

function trace (fn) {
    let history = new Map();

    function traced (...args) {
        let key = JSON.stringify(args);
        let result = fn(...args);
        history.set(key, result);
        return result;
    }

    traced.history = history;
    return traced;
}

let tracedFunc = trace(sum);

console.log(tracedFunc(3,5));    // 8
console.log(tracedFunc(5,6));    // 11
console.log(tracedFunc.history); // Map(2) { '[3,5]' => 8, '[5,6]' => 11 }
