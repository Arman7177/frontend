const add5 = a => a + 5
const double = a => 2 * a
const sub4 = a => a - 4

function pipe (...fns) {
    return function (value) {
        return fns.reduce((acc,fn) => fn(acc),value);
    }
}

const func = pipe(add5, add5, double, sub4)
console.log(func(2)) //20
