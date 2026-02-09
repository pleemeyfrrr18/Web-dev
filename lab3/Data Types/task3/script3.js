let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );



function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted );
alert( arr );



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
alert( names );



let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
alert( usersMapped[0].id ); 
alert( usersMapped[0].fullName )



function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3];
shuffle(arr);
alert(arr);
