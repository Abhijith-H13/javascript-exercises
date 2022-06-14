const reverseString = function(s) {
    let temp="";
    for (let index = s.length-1; index >= 0; index--) {
        temp+=s[index];
        
    }return temp;
};

// Do not edit below this line
module.exports = reverseString;
