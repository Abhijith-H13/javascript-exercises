const repeatString = function (s,n) {
    let temp=s;
    for (let index = 1; index < n; index++) {
        temp = temp.concat(s);        
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
