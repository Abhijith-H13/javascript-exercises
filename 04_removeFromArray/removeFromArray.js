const removeFromArray = function(a,n) {
    let index = a.indexOf(n);
    a.splice(index,1);
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
