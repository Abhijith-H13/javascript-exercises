
const codeSet = code => (code<97?65:97);
const mod = (n,m)=>(n+m+m)%m;
const caesar = function(s,n) {
    let newstr =[];
    for (let index = 0; index < s.length; index++) {
        const code = s[index].charCodeAt();
        if((code>=65&&code<=90)||(code>=97&&code<=122)){
            newstr[index]=String.fromCharCode(mod(code+n -codeSet(code),26)+codeSet(code)); 
        }else{
            newstr[index]=s[index];
        }        
    }
    return newstr.join("");
};
// Do not edit below this line
module.exports = caesar;
