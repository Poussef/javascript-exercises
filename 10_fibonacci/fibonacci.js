const fibonacci = function(num) {
    num = parseInt(num);
    let a = 0, b = 1, c, i;
    if( num == 0){
        return a;
    } else if (num < 0) {
        return "OOPS";
    }
    for(i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
    };
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
