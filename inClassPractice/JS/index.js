var log = console.log;

// function userLoginFunc(id, password) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       log("user log in");
//       res({ userId: id });
//     }, 1000);
//   });
// }

// function grabUserInfo(user) {
//   log("user: " + user.userId + " is logged in");
//   return new Promise((res, rej) => {
//     setTimeout((obj) => {
//       log("user info is grabbed");
//       res({ name: "zcc", age: 12, goodAt: "nothing" });
//     }, 500);
//   });
// }

// function printOutUserBankAcount(userObj) {
//   log("having userObj now: ", userObj);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       log("user bank account found");
//       res("12343567362");
//     }, 1000);
//   });
// }

// log(
//   "what?",
//   userLoginFunc("123", "12321")
//     .then((userId) => grabUserInfo(userId))
//     .then((userObj) => printOutUserBankAcount(userObj))
//     .then((bankAccount) => console.log(bankAccount))
// );

// async and await version.
// async function displayTheBankRob() {
//   const login = await userLoginFunc("123", "12321");
//   const grabbedUser = await grabUserInfo({ user: 1 });
//   const account = await printOutUserBankAcount({});
// }
// Making nested callbacks version of it could help better understanding the promise.

////////////////////////////////////////////////////////////////////////////////////////////////

// create a customer Promise class
class MyPromise {
  constructor(successCallFunc, failCallFunc) {
    this.promiseStatus = "pending";
    this.thenCallbackList = [];
    this.catchCallbackList = [];
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    successCallFunc(this.resolve);
    failCallFunc(this.reject);
  }
  reject(errorMsg) {
    log(errorMsg);
    this.promiseStatus = "rejected";
    this.catchCallbackList.forEach((item) => {
      item(errorMsg);
    });
  }

  catch(catchCallbackFn) {
    this.catchCallbackList.push(catchCallbackFn);
  }

  resolve(data) {
    this.promiseStatus = "solved";
    this.thenCallbackList.forEach((item) => {
      item(data);
    });
  }

  then(thenCallbackFn) {
    this.thenCallbackList.push(thenCallbackFn);
  }
}

function requestId(id) {
  log("Looking for the database");
  return new MyPromise((res, rej) => {
    setTimeout(() => {
      log("We have id:", id);
      res(id);
    }, 1500);
  });
}

requestId("123").then((id) => grabToken(id));

// function grabToken(id) {
//   log("Holding the user id:", id);
//   log("Looking for the token");
//   return new MyPromise((res, rej) => {
//     setTimeout(() => {
//       res("Here is the token: aiufq340489r");
//     }, 1500);
//   });
// }

// .then((token) => log(token));

// log(grabToken("123").then((info) => log(info)));
