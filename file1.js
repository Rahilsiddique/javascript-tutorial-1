"use strict"
// console.log("hello there");
// var mafs = 10;
// var firstName = 'rahil';
// console.log(firstName);
// ** for power where second variable acts as powere and first one as index
// var $ahil = 'boy';
// console.log(mafs ** 0.5);
// console.log(22 / 7);
// console.log($ahil[$ahil.length-1]);

// let sentance = '    rahil    with spaces';
// let int = 24

// sentance = sentance.trim();

// console.log(sentance.length)
// console.log(sentance.toUpperCase())

// console.log(typeof sentance)
// console.log(typeof int)

// to convert a number into string add empty string at start

// let age = 19
// console.log(typeof age);

// age = age + ""
// console.log(typeof age)

// convert string to number and vice versa with a simple mehtod

// let firstName = "Rahil"
// let secondName = "Siddique"
// console.log(firstName +" " +secondName);

// let fakeNum = "10"
// let fakeNum2 = "01"
// adding a + in front of an string converts it to number 

// here the number will addup
// console.log(+fakeNum + +fakeNum2)

// here the numbers will concatinate
// console.log(fakeNum + fakeNum2)

// templete string, basically a mixture of both strings and numbers

// let socialCredit = 999;
// let fullName = 'Zong Xina'

// let info = `${fullName} has a social credit of ${socialCredit}`

// console.log(typeof info);


// null and undefined 
// let useLessNum;
// created a variable but not assigned a value so technically it has to be undefined 
// console.log(typeof useLessNum)
// console.log(useLessNum)

// let anotherUseLessNum = null;

// console.log(anotherUseLessNum)
// the output of below code should be null but its shows object which is due to a bug but since many many programes have been made after taking into consideration this bug, js developers have not corrected it
// console.log(typeof anotherUseLessNum)

// bigInt => a primitive datatype to store big integers 

// two ways of representing bigInt

// let aBigNum = BigInt(1324123412341234)

// let anotherBigNum = 123423412341234123n

// console.log(aBigNum + anotherBigNum)

// boolean expressions in javascript
// most of the boolean operators works similar in js as other programing languages 
// let num1 = 23
// let num2 = 32

// console.log(num1 < num2)

//  == vs ===
// understanding an intresting operator type

// let num1 = "8"
// let num2 = 8
// console.log(num1 == num2)
// above code will give o/p as true as it only checks value and not data type as above examples are clearly a string and number but since both have same value we will get output as true

// console.log(num1 === num2)
// now when we use === it checks value as well as datatype so eventhough they have same value but due to data type difference we get output as false

//  != vs !==
// console.log(num1 !== num2)
// the output of aboves code is true which means that 8 in number and in string are NOT equal 
// console.log(num1 != num2)
// here the output will be which means they are not equal 

// falcy statement

// false
// ""
// null 
// undefined
// 0

// everything except this is truth 

// ternery operator / conditional operator
// let marks = 89
// let remark = marks < 90 ? "you stupid" : "fair enough ig"
// console.log(remark)

// and( && ) or( || ) operators 

// let firstName = "Rahil"
// let age = 19
// if(firstName[0] === "R" && age > 18){
//     console.log("your name starts with R and you are above 18")
// }else{
//     console.log("ehh whatever")
// }

// let i = 0
// while(i<10){
//     console.log(i)
//     i++
// }

// Array 
// reference type also called as object
// any type of array can be made in js

// below is the string array
// let words = ['rahil','manu','sael','big chungus'];
// console.log(words);

// number array
// let numbers = [1,2,4,5,65];
// console.log(numbers);

//miexed array
// let miexed = [1,2,4,'random','mixed',null,undefined]
// console.log(miexed)

// Arrays are mutable 
// array push pop
// push pushesh the element at the end of the array and pop removes the end elemnet of the array

// words.push('saipu')
// console.log(words)
// console.log(words.pop())
// console.log(words)

// to add element at the beginneing of the array we can use unshift and for removing the first element we can use shift
 
// words.unshift('first')
// words.shift();
// console.log(words);  


// reference types
// Array

// let array1 = ["item1","item2"];
// when we do this the both the array i.e array1 and array2 gets same address
// so changes in one array1 gets reflected in array2 since both have same address
// let array2 = array1;
// when we make array1 equals array2 we are giving creating two arrays who are pointing at the same thing just like in java so when changes are made in one array it gets reflected in both of them
// console.log("array1",array1);
// console.log("array2",array2);
// array1.push('item3');
// console.log("after pushing an element in array 1");
// console.log("array1",array1);
// console.log("array2",array2);

// first we create an array and passed it values to another array and when we print the output we get the expected output
// but if we pushed one element in array1 and again printed but the array we shoudl see the changes only in first array
// but on the contrary we are seeing the changes in both the array

// primitive data type v/s referemce datatype

// primitive data type are stored in stack so each variable created gets a seperate memory location 
// soo when we change value of one it dosent reflect on another

// Reference data type are stored in heap memory and the address of that data type is stored in stack memory in the form of pointer


// how to clone array
// let first = ['one','two']

// to colne an array we use slice method
// let second = first.slice(0)

// we can also use concate method on empty array to clone an array
// let third = [].concat(first)

// spread operator
// let fourth = [...first,...first]

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(fourth)

// printing array using for loop
// let aNewArray = ['cat','dog','mouse','fish','frog']
// for(let i = 0; i < aNewArray.length; i++){
//     console.log(aNewArray[i].toUpperCase());
// }

// const for array
// const anArray = ['cat','dog','mouse','fish','frog']
// we can still use basic methods like push and pop 
// error occurs when we try to change the direct array

// use const for reference data type

// for of loop in array
// const animals = ['cat','dog','mouse','fish','frog']
// for(let animal of animals){
//     console.log(animal)
// }

// array destructuring
// const oneArray = ['one','two','three','four','five','six','seven']
// makes two variable 
// let [oneVar,,twoVar,...newArray] = oneArray;
// console.log(oneVar)
// console.log(twoVar)
// console.log(newArray)

// Objects 

// objects are way of storing data in the form of key and value
// const employee = {
//     naam:"zong",
//     id:12,
//     age:30,
//     "major skills":["java","html","css","javascript","react.js"]
// };
// here naam is key/properties having a value of zong and id as 12

// to access naam and id of employee we use "."
// console.log("employee name:"+employee.naam+" id:"+employee.id+" age:"+employee.age)
// console.log(employee["major skills"])

// how to add key value pair to objects
// employee.gender = "male";
// console.log(employee);

// how to access data from object
// console.log(employee["id"])
// console.log(employee["age"])

// dot v/s bracket notation
// the key in object is stored as string by default so if we put key under " " it wont affect anything if our key has space
// for some reason than we have to put it inside " " these
// and to access these words further we use bracket notation

// console.log(employee["major skills"]);

// const key = "email"
// employee[key] = "abcd@abc.com"
// console.log(employee);

// how to iterate over an object
// there are two of doing this 
// for in loop to iterate over keys 
// object[key] to obtain values

// for(let key in employee){
//     console.log(key)
// }

// for(let key in employee){
//     console.log(employee[key])
// }

// to get the values of both value and key we can use `` these things

// for(let key in employee){
//     console.log(`${key}: ${employee[key]}`)
// }

// Object.key(`name of object`) gives the value of all the keys mentioned
// console.log(Object.keys(employee))
// Computed properties
// const key1 = "obj1";
// const key2 = "obj2";

// const value1 = "val1";
// const value2 = "val2";

// two ways of creating object with only primitive data type
// using [] brackets
// const obj = {
//     [key1]: value1,
//     [key2]: value2
// }
// using [] brackets and empty obj
// const obj2 = {}
// obj2[key1] = value1;
// obj2[key2] = value2;
// console.log(obj2);

// Spread Operator

// ... used on array and string to spread 
// const array = [..."abcdefghijklmnopqrstuvwxyz"]
// console.log(array)

// to make object using spread operator
// const newObj = [...["jero","one"]]
// console.log(newObj)

// Object destructuring 
// const band = {
//     bandName : "marlyn manson",
//     famousSong : "sweet dreams",
//     album : "Anti-Christ",
//     year : 1985
// }
// to destructure an ojbect we use curly brackets
// let {bandName,famousSong,...rest} = band
// console.log(bandName," ",famousSong);
// console.log(rest)

// ---> Objects inside array
// ** IMP **

// const students = [
//     {studentId:1,studentName:"Rahil",branch:"comp"},
//     {studentId:2,studentName:"Ching-li",branch:"mech"},
//     {studentId:3,studentName:"juan",branch:"elex"}
// ]

// for(let student of students){
//     console.log(student)
// }

// Nested destructuring --> date: 22-nov-2021 || time: 4:46:03 

// const [{studentName:Naam,branch:newBranch},,{branch}] = students;
// console.log(Naam);
// console.log(newBranch);
// console.log(branch);

// --> Functions <--
// function declartion
// most basic function

// function printALine(){
//     console.log("Frick, I Need Nutting Amediately Now Ugghhhh Thanks :)");
// }
// printALine();
// printALine();

// function addTwoNum(num1,num2){
//     return num1+num2;
// }

// console.log(addTwoNum(32,54));

// odd or even
// function oddOrEven(num){
//     return num%2 === 0;
// }
// let val = oddOrEven(23);
// if(val){
//     console.log("hurra success "+val);
// }else{
//     console.log("noeee "+val)
// }

// binary search 

// function binarySearch(nums,s,e,t){
//     if(s>e){
//         return -1;
//     }
//     let m = Math.floor(s+(e-s)/2);
//     if(t>nums[m]){
//         return binarySearch(nums,m+1,e,t);
//     }
//     else if(t < nums[m]){
//         return binarySearch(nums,s,m-1,t)
//     } 
//     else{
//         return m;
//     }
// }
// let nums = [9,8,7,6,5,34,33,2]
// console.log(binarySearch(nums,0,nums.length-1,34));

// function expression
// the name of the vairalbe is functions name also called anonimous founction
// const aFunctionToPrint = function(){
//     console.log("hmm nice..")
// }
// aFunctionToPrint()

// const isOddOrEven = function(num){
//     return num%2 === 0;
// }
// console.log(isOddOrEven(4))

//  => Arrow function
// const isEvenOrOdd = (num) => {
//     return num%2 === 0;
// }
// console.log(isEvenOrOdd(17))

// binary search in arrow function
// const BS = (nums,s,e,t) => {
//     if(s>e){
//         return -1;
//     }
//     let m = Math.floor(s+(e-s)/2);
//     if(t>nums[m]){
//         return BS(nums,m+1,e,t);
//     }
//     else if(t < nums[m]){
//         return BS(nums,s,m-1,t)
//     } 
//     else{
//         return m;
//     }
// }
// let nums = [9,8,7,6,5,34,33,2]
// console.log(BS(nums,0,nums.length-1,34));

// arrow function at its limit >:(

// const basKaro = num => num%2 === 0

// console.log(basKaro(44))

// Hoisting Time = 5:24:46 date = 23 nov 2021
// later...

// Function inside function
// const app = () =>{
//     const insideApp = () =>{
//         console.log("inside function")
//     }

//     const isEven = (num) => console.log(num%2===0)

//     console.log("function")

//     insideApp()
//     isEven(4)
// }
// app();

// lexical scope
// if a variable is defined in file and the same is used in a fuction than 
// it takes the value from gloable scope if its not defined in function
// const myVar = "G-value"
// function parentFunc(){
//     const childFunction = () => console.log("childs value",myVar)
//     console.log("parents value",myVar)
//     childFunction();
// }
// parentFunc();

// block scope v/s function scope

// let and const are block scope 
// var is function scope 
// { } is a block 

// default parameter
// if the value of b is not passed by default it will be 
// function addTwo(a,b=0){
//     return a+b
// }
// console.log(addTwo(6))

// Rest parameters
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c} = `,c);
// }
// myFunc(1,2,3,4,null,undefined,"balls")

// sum of all arguments
// const addKaro = (...ans)=>{
//     var sum=0
//     for(let num of ans){
//         sum+=num
//     }
//     return sum;
// }
// console.log(addKaro(1,2,3,4,5));

// parametere destructuring time: 6:30:35 date: 25 nov 2021
// imp for react <--

// const person = {
//     Name:"juan",
//     age:20,
//     gender:"male"
// } 

// function paramDestructuring({Name,age,gender}){
//     console.log(`Name: ${Name} gender: ${gender} age: ${age}`)
// }

// paramDestructuring(person);

// callback function
// basically in a function we pass the parameter as a whole function for the naming convention we call it as callback function

// function aFunction(color){
//     console.log("it is a callback function")
//     console.log(`my fav color is ${color}`)
// }

// function anotherFunction(callback){
//     console.log(callback)
//     callback("purpul")
// }

// anotherFunction(aFunction)

// function returning a function
// function parentFunction(){
//     function childFunction(){
//         return "a gift from child living in his parents house"
//     }
//     return childFunction;
// }

// const varButFun = parentFunction();
// console.log(varButFun());

// Important array method 

// forEach
// map
// filter 
// reduce

// forEach method is usually used over an array or an object
// const array = [1,2,3,4,5];

// array.forEach(function(num){
//     console.log(num*2)
// })

// const employee = [
//     {Name:"Osas",age:34},
//     {Name:"kukumbuu",age:54},
//     {Name:"timore",age:24},
//     {Name:"pin-li",age:12}
// ]

// employee.forEach(function(employe,age){
//     console.log(`first name is${employe.Name} and age is ${employe.age}`)
// })

// for(let human of employee){
//     console.log(`first name is${human.Name} and age is ${human.age}`)
// }

// employee.forEach((user)=>{
//     console.log(user.Name)
// })

// Map method
// usually takes an array as input and modifies it and gives it back
// const numbers = [1,2,3,4,5,6,7,8,9]

// const squaredNumbers = numbers.map((number)=>{
//     return number*number;
// })
// console.log(squaredNumbers)

// taking previous example and creating a simple firstname array
// const employee = [
//     {Name:"Osas",age:34},
//     {Name:"kukumbuu",age:54},
//     {Name:"timore",age:24},
//     {Name:"pin-li",age:12}
// ]
// const onlyNames = employee.map((Names)=>{
//     return Names.Name
// })
// console.log(onlyNames)

// filter method
// takes input an array and create a new array whose output is true in callback function

// const numbers = [1,2,3,4,5,6,7,8,9]

// const evenNumbers = numbers.filter((number)=>{
//     return number%2===0
// })

// console.log(evenNumbers)

// reduce method

// const numbers = [1,2,3,4,5,6,7,8,9]
// understanding syntax
// const totalSum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },0)
// the zero after callback fuction is the initializer, by default its value is zero

// internal working of reduce methode
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              6              21
// 21              7              28
// 28              8              36
// 36              9              45

// hence the output will be 45
// console.log(totalSum)

// another example
// const shoppingList = [
//     {product:"laptop",price:55000},
//     {product:"mobile",price:10000},
//     {product:"keyboard",price:2000},
//     {product:"mouse",price:1000}
// ]

// const totalAmount = shoppingList.reduce((totalPrice,currentPrice)=>{
//     return totalPrice + currentPrice.price;
// },0);

// total price is accumulator and initialized with 0

// console.log(totalAmount)


// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort  --> mutates the orignal array unlike map forEach and filter (these return a new array) reduce returns a number
// const unSortedArray = [8,30,4,5,70,2,100,6];
// console.log(unSortedArray.sort());
// we now expect the array to be sorted but something intresting happens
// here the sort function sorts the array as if they are string 
// it reads only first number and makes the decesion
// incase of string array it sorts like decstaniory (wrong spelling >:)
// const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// userNames.sort();
// console.log(userNames);

// to sort number
// unSortedArray.sort((a,b) => a-b)
// console.log(unSortedArray)

// so basically it subtracts the firt two numbers and if the value is +ve than change the orientation or else nothing

// real life application of sorting
// price lowToHigh HighToLow 
// const products = [
//     {productId: 1, produceName: "p1",price: 300 },
//     {productId: 2, produceName: "p2",price: 3000 },
//     {productId: 3, produceName: "p3",price: 200 },
//     {productId: 4, produceName: "p4",price: 8000 },
//     {productId: 5, produceName: "p5",price: 500 },
// ]

// const HighToLow = products.slice(0).sort((a,b)=>a.price-b.price)
// console.log(HighToLow)

// const lowToHigh = products.slice(0).sort((a,b)=>b.price-a.price)
// console.log(lowToHigh)

// HighToLow.forEach((prices)=>{
//     console.log(prices.price)
// })

// find method time 7:26:50 date 27 nov 2021
// prac is going on so inconsistancy

// returns the first occurance that satisfys the condition

// const pets = ['cat','dog','rabbit','gees','goldFish'];
// const shortPetName = pets.find(pet => pet.length === 4)
// console.log(shortPetName)

// every method
// works like `&&` returns true if each and every array satisfies that condition orr else false
// const numbers = [1,2,3,4,5,6,,8,9]
// const isEven = numbers.every(number=>number%2===0)
// console.log(isEven)

// some method
// works like `||` return true even if one value satisfies the condtion
// const numbers = [1,2,3,4,5,6,8,9]
// const isEven = numbers.some(number=>number%2===0)
// console.log(isEven)

// fill method --> changes orignal array

// const myArray = [1,2,3,4,5,6,7,8]
// myArray.fill(0,2,5)
// replaces all the elements from index 2 to 5 wiht 0
// console.log(myArray)

// splice method --> changes orignal array
// use to delete array or to insert in between

// const myArray = ['item1','item2','item3','item4'];

// start , delete , insert
// myArray.splice(1,0,'inserted item')

// deleted inserted simultaniously
// const replacedArray = myArray.splice(1,3,'vastu2','vastu3')
// console.log(myArray)
// console.log(replacedArray)

// iterables 
// jispe hum for loop laga sakte hai
// string , array are iterable

// const firstName = 'Rahil';
// for(let char of firstName){
//     console.log(char);
// }
// objects are not iterables

// array like object
// jinke pass length property hoti hai or hum index se access kar sakte hai
// eg :- string 

// sets (it is iterable)
// store data
// sets have its own method
// no index-based access
// order is not guranteed
// unique items only (duplicates are not allowed)

// const useLess = ['stuff','things','cool','yes']
// const numbers = new Set([1,2,3]);
// numbers.add(4)
// numbers.add(useLess)
// console.log(numbers.has(3))
// console.log(numbers)

// for(let number of numbers){
//     console.log(number);
// }

// const myArray = [1,2,3,4,5,6,7,6,5,4,1,2,3]
// const aSet = new Set(myArray);
// let setLength = 0
// for(let element of aSet){
//     if(aSet.has(element)){
//         setLength++;
//     }
// }
// console.log(setLength)

// Maps 

// jus like HashMaps 
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// key value pair is stored in the form of array so we have destructured it 
// before passing it in the loop in that form
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }

// const person1 = {
//     id: 1,
//     firstName: "harshit"
// }
// const person2 = {
//     id: 2,
//     firstName: "harshta"
// }

// const extraInfo = new Map();
// extraInfo.set(person1, {age: 8, gender: "male"});
// extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(extraInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);

// clone using Object.assign time: 8:29:10 date: dec 2 10:35pm

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }
// two ways of cloning an object 
// 1. using spread operator
// const obj2 = {...obj1}
// obj1.key3 = "value3"
// console.log(obj1)
// console.log(obj2)

// we can also use Object.assign

// const obj3 = Object.assign({},obj2)
// console.log(obj3)

// optional chaining

// const user = {
//     firstName : "rahil",
//     address : {roomNo : 6}
// }
// if for some reasion ther is no address we will get output as undefined 
// but if we try to access room no we will get error to avoid that
// we can use '?.'
// console.log(user?.address?.roomNo)

// methods --> IMP
// function inside object

// const person = {
//     firstName : "rahil",
//     age : 20,
//     about : ()=>{
//         console.log(`my name is ${this.firstName} and age is ${this.age}`)
//     },
//     info : function(){
//         console.log(`name is ${this.firstName} age is ${this.age}`)
//     }
// }

// function info(){
//     console.log(`name is ${this.firstName} and age is ${this.age}`)
// }

// const person1 = {
//     firstName : "sahil",
//     age : 21,
//     info : info
// }

// const person2 = {
//     firstName : "manue",
//     age : 12,
//     info : info
// }
// const person3 = {
//     firstName : "blyat",
//     age : 24,
//     info : info
// }
// this keyword is basically the object in which it is used 
// this executes in run time
// person.about()
// person1.info()
// person2.info()
// person3.info()

// this keyword

// what if we directly console.log(this) we will get bunch of window objects
// console.log(this)
// this and wondow is same if used globally
// console.log(this === window)

// function myFunc(){
//     console.log(this)
// }
// myFunc()
// output will be undefined since we have used strict at the top of the file
// if there was no 'use strict' myFunc would have been added to the window object

// call apply bind methods
// function aobut(hobby,sirName){
//     console.log(`name is ${this.firstName} age is ${this.age} hobby is ${hobby} sirName is ${sirName}`)
// }
// 1. call
// const user1 = {
//     firstName : 'Rahil',
//     age : 23,
//     about : function(){
//         console.log(`name is ${this.firstName} age is ${this.age}`)
//     }
// }
// const user2 = {
//     firstName : 'jango',
//     age : 13,
//     about : function(hobby,sirName){
//         console.log(`name is ${this.firstName} age is ${this.age} hobby is ${hobby} sir name is ${sirName}`)
//     }
// }
// here i have called the user1 but passed the value of user2 using call method
// user2.about.call(user1,"coding","electronica");
// we can also pass function parameters with the help of call method

// 2. apply
// internally it works like call only just that in case of function parameter we pass in an array instead of individully passing the arguments

// user2.about.apply(user1,["coding","siddique"])

// 3. bind
// it simply returns a function

// const func = user2.about.bind(user1,"fishing","khan")
// func()

// arrow function this
// incase of arrow function this goes one level up so if we use it in user example it will take value as window object instead of user1

// short syntax
// instead of value pair use directly mehtod name

// ---> Object Oriented Programming in javaScript <---

// const userMethods = {
//     about : function(){
//         return `name: ${this.firstName} age: ${this.age}`
//     },
//     is18 : function(){
//         return this.age >= 18?'legal':'illigal';
//     }
// }
// function createUsers(firstName,lastName,email,address,age){
//     const user = Object.create(userMethods)
//     user.firstName = firstName
//     user.lastName = lastName
//     user.email = email
//     user.address = address
//     user.age = age
//     return user
// }

// const user1 = createUsers('Rahil','siddique','siddiquerahil19@gmail.com','mumbai',19)
// const user2 = createUsers('sahil','siddique','siddiquesahil16@gmail.com','mumbai',16)
// const user3 = createUsers('aahil','siddique','siddiqueahil19@gmail.com','mumbai',29)
// console.log(user1)
// console.log(user2)
// console.log(user3)

// const isLegal = user1.is18.call(user1)
// console.log(isLegal)

// const user1Info = user1.about.call(user1)
// console.log(user1Info)

// console.log(user1.about())
// console.log(user2.about())
// console.log(user3.about())


// Object.create

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// to create an empty object that extends to obj1 we use 
// Object.create method

// const obj2 = Object.create(obj1);
// obj2 is created with the __proto__ of obj1
// __proto__ and [[prototype]] are same but prototype is different
// obj2.key3 = "value3"
// console.log(obj2.key1)
// console.log(obj2.__proto__)


// prototype in javascript

// function hello(){
//     console.log("hello world");
// }

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());

// Prototype Use time: 9:56:00 date: 5 dec 2021 10:56 pm 

// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// createUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.about());

// new keyword
// function createUser(firstName,lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} ${this.lastName}`
// }
// const user1 = new createUser('Rahil','Siddique')
// console.log(user1)
// const About = user1.about()
// console.log(About)

// new keyword does three things 
// 1.) new creates an empty object which is equal to this keyword
// 2.) new does the job of object.create

// new keyword use

// we build the constructure function >:(
// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

// console.log(user1)

// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key)
//     }
// }

// class keyword
// classes are fake in javascript

// now its looking like java :)
// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18(){
//         return this.age>=18?'legal':'illigal'
//     }
//     sing(){
//         console.log(" ~ ~ my heart is radio ~ ~ ")
//     }
// }
// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user3.is18())

// classes practice and super keyword

// class Animals{
//     constructor(animalsName,animlasAge){
//         this.animalsName = animalsName;
//         this.animlasAge = animlasAge;
//     }
//     eat(food){
//         console.log(`${this.animalsName} eats ${food}`)
//     }
// }
// below are the sub class of animal class which extends to animal class
// class DomesticAnimal extends Animals{
//     constructor(animalsName,animalsAge,use){
//         super(animalsName,animalsAge)
//         this.use = use
//     }
//     animalUse(){
//         console.log(`${this.animalName} is used for ${this.use}`)
//     }
// }
// class WildAnimal extends Animals{

// }
// const DomesticAnimal1 = new DomesticAnimal('cat',10)
// const animal1 = new Animals('lion',40);
// console.log(DomesticAnimal1)
// console.log(animal1)
// animal1.eat('meat')

// const DomesticAnimal2 = new DomesticAnimal('cow',20,'milk')
// console.log(DomesticAnimal2)
// DomesticAnimal2.animalUse()

// getters and setters
// to use method as property

// class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName){
//         const [firstName,lastName] = fullName.split(" ")
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     static classInfo(){
//         console.log("everything about a persons full name")
//     }
// }
// const person1 = new Person('Rahil','Siddique')
// console.log(person1.fullName)
// if in aboves code i use fullName withour () we will get the whole function instead of the return statemnet
// to achive getting the return statement we can put get before the function
// after putting get the function becomes property
// person1.fullName = "big boii"
// console.log(person1.fullName)

// static method which is used in class and can be accessed with only classname
// Person.classInfo()

// ---> THE END <---
// first video completed on 6 dec 7:31 pm 2021