const fibonacci = function(n) {
    let f=1;
    let s=1;
    let t=0;
    if(n==1||n==2){
        return 1;
    }
    if(n<1){
        return "OOPS";
    }
    while(n>2){
        t=f+s;
        f=s;
        s=t;
        n=n-1;
    }return t;
};

// Do not edit below this line
module.exports = fibonacci;
