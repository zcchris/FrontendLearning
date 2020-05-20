// Deep filter
// Given an object and a filter function, write a function that will go through and filter the object, then return a filtered object

// Example 1
// Input Object

// {
//   a: 1,
//   b: {
//    c: 2,
//     d: -3,
//     e: {
//       f: {
//         g: -4,
//       },
//     },
//     h: {
//       i: 5,
//       j: 6,
//     },
//   }
// Input Function
// const filter = (n) => n >= 0

// Output

// { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }

// var obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: -3,
//     e: {
//       f: {
//         g: -4,
//       },
//     },
//     h: {
//       i: 5,
//       j: 6,
//     },
//   },
// };

// function meEmpty(obj) {
//   return typeof obj === 'object' && Object.keys(obj).length === 0;
// }

// let deepFilter = (obj, filterFunc) => {
//   let res = {};
//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       let innerObj = deepFilter(obj[key], filterFunc);
//       if (!meEmpty(innerObj)) {
//         res[key] = innerObj;
//       }
//     } else if (filterFunc(obj[key])) {
//       res[key] = obj[key];
//     }
//   }
//   return res;
// };
// console.log(deepFilter(obj, (n) => n >= 0));
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Leetcode: 71. Simplify Path
// var simplifyPath = (path) => {
//   const stack = [];

//   for (let p of path.split('/').filter((p) => p && p !== '.')) {
//     p === '..' ? stack.pop() : stack.push(p);
//   }

//   return '/' + stack.join('/');
// };
// var simplifyPath = function(path) {
//   const paths = path.split('/');
//   const result = [];
//   for (let i = 0; i < paths.length; i++) {
//     if (paths[i] === '..') {
//       result.pop();
//     } else if (paths[i] === '' || paths[i] === '.') {
//       continue;
//     } else {
//       result.push(paths[i]);
//     }
//   }
//   return '/' + result.join('/');
// };
// console.log(simplifyPath('/home/'));
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// call, apply and bind methods learning
// let bob = function (num, str) {
//   console.log('bob', num, str, this);
//   return true;
// };

// let bill = {
//   name: 'bill',
//   age: 12,
//   method: function (fn) {},
// };

// // call
// bob.call(bill, 2, 'a');

// // apply
// let arr = [3, 'b'];
// bob.apply(bill, arr);

// // bind
// let bindBob = bob.bind(bill, 4, 'e');
// bindBob();
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Customer of stringify
class zcJSON {
  constructor() {}

  static stringify(obj) {
    if (typeof obj !== 'object' || obj === undefined || obj instanceof Array) {
      return this.value(obj);
    } else if (obj === null || obj === undefined || obj instanceof Array) {
      return `null`;
    }

    let objStr = Object.keys(obj).map((k) => {
      return typeof obj[k] === 'function'
        ? null
        : `"${k}":"${this.value(obj[k])}"`;
    });

    return `"{${objStr}}"`;
  }

  static value(obj) {
    switch (typeof obj) {
      case 'string':
      case 'number':
      case 'boolean':
        return `${obj}`;
      case 'function':
      case 'symbol':
      case 'undefined':
        return null;
      case 'object':
        if (obj instanceof Date) {
          console.log('?');
          return `${obj.toISOString()}`;
        } else if (Array.isArray(obj)) {
          return `[${obj.map((v) => this.value(v)).join(',')}]`;
        } else {
          return this.stringify(obj);
        }
    }
  }
}
let objj = {
  a: 1,
  b: {
    c: 'Hello World',
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: 'Good Night Moon',
  },
};
console.log(zcJSON.stringify(objj));
