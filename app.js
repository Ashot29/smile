let s = 0;

function sum(k) {
    if (!k) {
        return s;
    }
    s += k
    return function(o) {
        return sum(o);
    }
}

sum(9)(10)(8)();
console.log(s)