type Person = {
  name: string,
  sex: number,
  age: number
}
type p1 = Partial<Person>
// type p1 = {
//   name?: string;
//   sex?: number;
//   age?: number;
// }

type ppick = Pick<Person, 'name' | 'sex'>
// type ppick = {
//   name: string;
//   sex: number;
// }