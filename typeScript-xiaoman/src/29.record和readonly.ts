type Person1 = {
  name: string,
  sex: number,
  age: number
}

type readPerson = Readonly<Person1>
// type readPerson = {
//   readonly name: string;
//   readonly sex: number;
//   readonly age: number;
// }
type k = number
type recordPerson = Record<k, Person1>
// type recordPerson = {
//   [x: number]: Person1;
// }
let rp: recordPerson = {
  1: { name: 'hawkins', sex: 1, age: 22 }
}
console.log(rp);
