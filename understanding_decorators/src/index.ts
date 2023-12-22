// const log = (target, key, descriptor) => {
//   target("Thomas");
// };

// class Example {

//   @log
//   greet(name: string) {
//     console.log(`Hello ${name}`);
//   }
// }

// const e = new Example();
// e.greet("Robin");

//
//
//Composite decorator
// const log = (target, key, descriptor) => {
//   target("log");
// };

// const log2 = (target, key, descriptor) => {
//   target("log2");
// };

// class Example {
//   @log2
//   @log // this will execute first.
//   greet(name: string) {
//     console.log(`Hello ${name}`);
//   }
// }

// const e = new Example();
// e.greet("Robin");

//
// Parameter (Decorator)

// const validateParam = (min: number, max: number) => {
//   return function (target, key, descriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: number[]) {
//       for (let i of args) {
//         if (i < min || i > max) {
//           throw new Error("Cannot multiply");
//         }
//       }
//       return originalMethod.apply(this, args);
//     };
//   };
// };

// class MathOperation {
//   @validateParam(0, 10)
//   multiply(a: number, b: number) {
//     return a * b;
//   }
// }

// const m = new MathOperation();
// console.log(m.multiply(-1, 5));

// 
// Field Decorators && constructor values.
// const Column = (t, k) => {
//   console.log("t", t);
//   console.log("key", k);
// };

// const Entity = function ({ name }) {
//   return (t) => {
//     console.log("entity target", t.constructor.name);
//   };
// };

// @Entity({ name: "hello" })
// class ExampleClass {
//   constructor(name: string) {
//     console.log("constructor value : ", name);
//   }
//   @Column
//   public message: string;
// }

// let e = new ExampleClass("name");
