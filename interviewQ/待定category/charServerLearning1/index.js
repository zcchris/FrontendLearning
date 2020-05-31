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
// class zcJSON {
//   constructor() {}

//   static stringify(obj) {
//     if (typeof obj !== 'object' || obj === undefined || obj instanceof Array) {
//       return this.value(obj);
//     } else if (obj === null || obj === undefined || obj instanceof Array) {
//       return `null`;
//     }

//     let objStr = Object.keys(obj).map((k) => {
//       return typeof obj[k] === 'function'
//         ? null
//         : `"${k}":"${this.value(obj[k])}"`;
//     });

//     return `"{${objStr}}"`;
//   }

//   static value(obj) {
//     switch (typeof obj) {
//       case 'string':
//       case 'number':
//       case 'boolean':
//         return `${obj}`;
//       case 'function':
//       case 'symbol':
//       case 'undefined':
//         return null;
//       case 'object':
//         if (obj instanceof Date) {
//           console.log('?');
//           return `${obj.toISOString()}`;
//         } else if (Array.isArray(obj)) {
//           return `[${obj.map((v) => this.value(v)).join(',')}]`;
//         } else {
//           return this.stringify(obj);
//         }
//     }
//   }
// }
// let objj = {
//   a: 1,
//   b: {
//     c: 'Hello World',
//     d: 2,
//     e: {
//       f: {
//         g: -4,
//       },
//     },
//     h: 'Good Night Moon',
//   },
// };
// console.log(zcJSON.stringify(objj));
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// var arr = ['a', 'f', 'a', 'e', 'y', 'e', 'f', 'a'];
// var getToken = () => {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]] += 1;
//     }
//   }
//   return obj;
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that reverse a number
// let num = 12345;
// var res = (v) => {
//   return v.toString().split('').reverse().join('');
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that checks whether a
// passed string is palindrome or not?
// var str = 'abcdba';
// var palindromeCheck = (str) => {
//   var strRev = str.split('').reverse().join('');
//   return strRev === str;
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// var str = 'dog';
// var comb = (str) => {
//   var res = [];
//   var arr = str.split('');
//   for (let i = 0, len = arr.length; i < len; i++) {
//     for (let j = i + 1; j < len + 1; j++) {
//       res.push(arr.slice(i, j));
//     }
//   }
//   return res;
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that returns a passed string with letters
// in alphabetical order.
// var str = 'abaervaev';
// var alpOrder = (str) => {
//   return str.split('').sort().join('');
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that accepts a string as a parameter and
// converts the first letter of each word of the string in upper case.
// var sentence = 'the quick brown fox';
// var upperFirst = (str) => {
//   var arr = str.split(' ');
//   var res = [];
//   for (let s of arr) {
//     res.push(s.charAt(0).toUpperCase() + s.slice(1));
//   }
//   return res.join(' ');
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that accepts a string as a parameter and
// find the longest word within the string.
// let str = 'Web Development Tutorial';
// var longestWord = (str) => {
//   var arr = str.split(' ');
//   var word = arr[0];
//   for (let str of arr) {
//     if (word.length < str.length) {
//       word = str;
//     }
//   }
//   return word;
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that accepts a string as a parameter and
// counts the number of vowels within the string.
// var str = 'The quick brown fox';
// var vowelsCount = (str) => {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowel_list.indexOf(str[i]) !== -1) {
//       vcount += 1;
//     }
//   }
//   return vcount;
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that accepts a number as a parameter
// and check the number is prime or not.
// var isPrime = (v) => {
//   if (v === 1) {
//     return false;
//   } else if (v === 2) {
//     return true;
//   } else {
//     for (let i = 2; i < v; i++) {
//       if (v % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function which accepts an argument and returns
// the type.
// var objType = (obj) => {
//   var objT = [Function, RegExp, Number, String, Boolean, Object];
//   if (typeof obj === 'object' || typeof obj === 'function') {
//     for (let i = 0, len = objT.length; i < len; i++) {
//       if (obj instanceof objT[i]) {
//         return objT[i];
//       }
//     }
//   }
//   return typeof obj;
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to compute the factors of a positive integer.
// var factors = (num) => {
//   var res = [];
//   for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
//     if (num % i === 0) {
//       res.push(i);
//       if (num / i !== 0) {
//         res.push(num / i);
//       }
//     }
//   }
//   return res;
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to convert an amount to coins.
// var amountToCoins = (amount, coins) => {
//   if (amount === 0) {
//     return [];
//   } else {
//     if (amount >= coins[0]) {
//       let left = amount - coins[0];
//       return [coins[0]].concat(amountToCoins(left, coins));
//     } else {
//       coins.shift();
//       return amountToCoins(amount, coins);
//     }
//   }
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to extract unique characters from a string.
// var uniqueChar = (str) => {
//   return str
//     .split('')
//     .filter((item, i, arr) => {
//       return arr.indexOf(item) === i;
//     })
//     .join('');
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to  get the number of occurrences of each
// letter in specified string.
// var occr = (str) => {
//   var res = {};
//   var arr = str.split('');
//   for (let c of arr) {
//     if (c == ' ') continue;
//     res[c] = res[c] == null ? 1 : res[c] + 1;
//   }
//   return res;
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that returns array elements larger than a number.
// var arr = [1, 2, 4, 3, 2, 5, 6, 4, 7, 4, 8, 84, 32, 2, 3];
// var filterRes = (arr, num) => {
//   return arr.filter((v) => {
//     return v > num;
//   });
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that generates a string id (specified
// length) of random characters.
// var char_list =
//   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// var randomGen = (len) => {
//   var arr = char_list.split('');
//   var res = [];
//   for (let i = 0; i < len; i++) {
//     res.push(arr[Math.floor(Math.random() * char_list.length)]);
//   }
//   return res.join('');
// };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to get all possible subset with a fixed
// length (for example 2) combinations in an array.
// Generate all array subsets:
// function* subsets(array, offset = 0) {
//   while (offset < array.length) {
//     let first = array[offset++];
//     for (let subset of subsets(array, offset)) {
//       subset.push(first);
//       yield subset;
//     }
//   }
//   yield [];
// }
// Example:
// for (let subset of subsets([1, 2, 3])) {
// console.log(subsets([1, 2, 3]).next());
// }
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to find the first not repeated character.
// var firstNotRepeat = (str) => {
//   // get appearance - key/value pair
//   // return letter first encounter (arr[key] == 1)
// }
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to find longest substring in a given a
// string without repeating characters.
// var longestSubNoDupl = (str) => {
//   var arr = str.split('');
//   let l = 0,
//     r = 0,
//     obj = {},
//     max = 0,
//     res;
//   while (r < arr.length) {
//     if (!obj[arr[r]]) {
//       obj[arr[r]] = 1;
//     } else {
//       obj[arr[r]] += 1;
//     }
//     // move r pointer
//     while (obj[arr[r]] > 1) {
//       obj[arr[l]]--;
//       l++;
//     }

//     if (r - l + 1 > max) {
//       max = r - l;
//       res = arr.slice(l, r + 1);
//     }
//     r++;
//   }
//   return res.join('');
// };

var net = require('net');
var sys = require('sys');
var EventEmitter = require('events').EventEmitter;

/*******************************************************************************
 * ChatServer
 *
 * Manages connections, users, and chat messages.
 ******************************************************************************/

function ChatServer() {
  this.chatters = {};
  this.server = net.createServer(this.handleConnection.bind(this));
  this.server.listen(1212, 'localhost');
}

ChatServer.prototype.isNicknameLegal = function (nickname) {
  // A nickname may contain letters or numbers only,
  // and may only be used once.
  if (nickname.replace(/[A-Za-z0-9]*/, '') != '') {
    return false;
  }
  for (used_nick in this.chatters) {
    if (used_nick == nickname) {
      return false;
    }
  }
  return true;
};

ChatServer.prototype.handleConnection = function (connection) {
  console.log('Incoming connection from ' + connection.remoteAddress);
  connection.setEncoding('utf8');

  var chatter = new Chatter(connection, this);
  chatter.on('chat', this.handleChat.bind(this));
  chatter.on('join', this.handleJoin.bind(this));
  chatter.on('leave', this.handleLeave.bind(this));
};

ChatServer.prototype.handleChat = function (chatter, message) {
  this.sendToEveryChatterExcept(chatter, chatter.nickname + ': ' + message);
};

ChatServer.prototype.handleJoin = function (chatter) {
  console.log(chatter.nickname + ' has joined the chat.');
  this.sendToEveryChatter(chatter.nickname + ' has joined the chat.');
  this.addChatter(chatter);
};

ChatServer.prototype.handleLeave = function (chatter) {
  console.log(chatter.nickname + ' has left the chat.');
  this.removeChatter(chatter);
  this.sendToEveryChatter(chatter.nickname + ' has left the chat.');
};

ChatServer.prototype.addChatter = function (chatter) {
  this.chatters[chatter.nickname] = chatter;
};

ChatServer.prototype.removeChatter = function (chatter) {
  delete this.chatters[chatter.nickname];
};

ChatServer.prototype.sendToEveryChatter = function (data) {
  for (nickname in this.chatters) {
    this.chatters[nickname].send(data);
  }
};

ChatServer.prototype.sendToEveryChatterExcept = function (chatter, data) {
  for (nickname in this.chatters) {
    if (nickname != chatter.nickname) {
      this.chatters[nickname].send(data);
    }
  }
};

/*******************************************************************************
 * Chatter
 *
 * Represents a single user/connection in the chat server.
 ******************************************************************************/

function Chatter(socket, server) {
  EventEmitter.call(this);

  this.socket = socket;
  this.server = server;
  this.nickname = '';
  this.lineBuffer = new SocketLineBuffer(socket);

  this.lineBuffer.on('line', this.handleNickname.bind(this));
  this.socket.on('close', this.handleDisconnect.bind(this));

  this.send('Welcome! What is your nickname?');
}

sys.inherits(Chatter, EventEmitter);

Chatter.prototype.handleNickname = function (nickname) {
  if (server.isNicknameLegal(nickname)) {
    this.nickname = nickname;
    this.lineBuffer.removeAllListeners('line');
    this.lineBuffer.on('line', this.handleChat.bind(this));
    this.send('Welcome to the chat, ' + nickname + '!');
    this.emit('join', this);
  } else {
    this.send('Sorry, but that nickname is not legal or is already in use!');
    this.send('What is your nickname?');
  }
};

Chatter.prototype.handleChat = function (line) {
  this.emit('chat', this, line);
};

Chatter.prototype.handleDisconnect = function () {
  this.emit('leave', this);
};

Chatter.prototype.send = function (data) {
  this.socket.write(data + '\r\n');
};

/*******************************************************************************
 * SocketLineBuffer
 *
 * Listens for and buffers incoming data on a socket and emits a 'line' event
 * whenever a complete line is detected.
 ******************************************************************************/

function SocketLineBuffer(socket) {
  EventEmitter.call(this);

  this.socket = socket;
  this.buffer = '';

  this.socket.on('data', this.handleData.bind(this));
}

sys.inherits(SocketLineBuffer, EventEmitter);

SocketLineBuffer.prototype.handleData = function (data) {
  for (var i = 0; i < data.length; i++) {
    var char = data.charAt(i);
    this.buffer += char;
    if (char == '\n') {
      this.buffer = this.buffer.replace('\r\n', '');
      this.buffer = this.buffer.replace('\n', '');
      this.emit('line', this.buffer);
      this.buffer = '';
    }
  }
};

// Start the server!
server = new ChatServer();
// console.log(longestSubNoDupl('example.com'));
