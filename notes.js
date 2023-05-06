//learned that to add a property to an object in javascript you can just do this
let person1 = { name: "Blair", age: 34 }

console.log("person1", person1);

let person2 = {...person1, name: "Dan", gender: 'M'}


//but in typescript you need to declare an interface like

interface Person {
  name: string,
  age: number
}
//so adding a third property isnt as easy, could be optional/nullable etc but if you're not defining the type or structure... ?
