// #1
let a = 1, b = 1;

alert( ++a );
alert( b++ ); 

alert( a ); 
alert( b ); 

// #2
let a = 2;
let x = 1 + (a *= 2);

// #3
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b);
