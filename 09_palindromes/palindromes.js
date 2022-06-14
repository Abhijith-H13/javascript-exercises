const palindromes = function (str) {
    let newstr=str.toLowerCase().replace(/[^a-z]/g,"");
    return (newstr.split("").reverse().join("")==newstr);
};

// Do not edit below this line
module.exports = palindromes;
