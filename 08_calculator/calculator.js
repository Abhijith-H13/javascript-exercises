const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let sum=0;
  for (let index = 0; index < a.length; index++) {
    sum += a[index];
  }return sum;
};

const multiply = function(a) {
  let p=1;
  for (let index = 0; index < a.length; index++) {
    p *= a[index];
  }return p;
};

const power = function(a,n) {
	let p= 1;
  for (let index = 0; index < n; index++) {
    p*=a;
    
  }return p;
};

const factorial = function(a) {
	let f=1;
  for (let index = 1; index <=a; index++) {
    f*=index;    
  }return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
