const findTheOldest = function(a) {
    let largest = 0;
    let li=0;
    for (let index = 0; index < a.length; index++) {
        d=a[index].yearOfDeath;
        b=a[index].yearOfBirth;
        if (!d) {
            d=new Date().getFullYear();;
        }age=d-b;
        if(age>largest){
            largest=age;
            li=index;
        }

    }return a[li];


};

// Do not edit below this line
module.exports = findTheOldest;
