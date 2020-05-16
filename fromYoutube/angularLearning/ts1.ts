// function add(num1: number, num2: number, num3: number = 0): number {
//   return num1 + num2 + num3;
// }

// console.log(add(1, 2)); // 3
// console.log(add(1, 2, 3)); // 6

// function myType(...arr: any[]) {
//   for (let v of arr) {
//     console.log(typeof v);
//   }
// }

// myType(1, 2, 'a', true); // number, number, string boolean

// string
// let str1: string = 'abc';
// let str2: string = 'cde';
// // instead of using plus sign to combine the string values.
// let str3 = `str1 + str2 = "${str1}" + "${str2}"`;

// console.log(str3); // str1 + str2 = "abc" + "cde"

// let arr: number[] = [1, 2, 3, 4, 5, 6];

// console.log(arr);
// console.log(arr.slice(0, 2));
// console.log(arr);
// console.log(arr.splice(0, 2));
// console.log(arr);

// interface IPerson {
//   // interface prefixs with I
//   first_name: string;
//   lats_name: string;
//   age: number;
// }

// let person1: IPerson = {
//   first_name: 'zc',
//   lats_name: 'c',
//   age: 20,
// };

// interface IEmployee extends IPerson {
//   role: string;
//   salary: number;
// }

// let me: IEmployee = {
//   first_name: 'zc',
//   lats_name: 'c',
//   age: 20,
//   role: 'developer',
//   salary: 100000000,
// };

interface IDdisplayable {
  displayName(): void;
  displayNameAsString(): void;
}

class Person {
  // public
  first_name: string;
  last_name: string;

  // private
  private _ssn: string;
}

class SuperPerson extends Person {
  super_power: string;
}
