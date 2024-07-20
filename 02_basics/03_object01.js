// Singleton

// Objects are created in two types: 1.literal   2. Constructor

// 1. Literals
const mysmb = Symbol("key1")

const JsUser = {
    name: "rudra",
    "full name": "Rudra Jain",
    [mysmb]: "Mykey1",
    age: 21,
    location: "Bhopal",
    email: "rudra@gmail.com",
    isLoggedIn: false,
    laseLoginDays: ["Monday", "Saturday"]

}

// for excessing bojects
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  //we can't access string variables with spaces between them using " . " operator
// console.log(JsUser [mysmb])

// JsUser.email = "surma@gmail.com"
// Object.freeze(JsUser);
// JsUser.email = "bhopali@gmail.com"
// console.log(JsUser["email"])


JsUser.greeting = function(){
    console.log("hello world");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello world, ${this.name}`);
}

console.log(JsUser.greetingTwo());