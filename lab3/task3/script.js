let user = { 
  name: "John"
};
let id = Symbol("id");
user[id] = 1;
alert( user[id] );


let id = Symbol("id");
let user = {
  name: "John",
  [id]: 123 
};


let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); 

alert( "Direct: " + user[id] )


let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] );
