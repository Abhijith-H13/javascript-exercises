const ftoc = function(f) {
    let c = (f-32)*(5/9);
    return Math.round(c,1);
};

const ctof = function(c) {
    let f = (c*(9/5))+32;
    return Math.round(f,2);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
