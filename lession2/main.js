// function

//Decleration function 
 function sayHello(name) {
    // console.log(`xin chào ${name}`);
    return `Xin chào ${name}`
    
 }
 var result = sayHello("vinh")
//  console.log(result);
 
 //Expresstion function
 var sayHello2 = function (name) {
    return `chao mừng bạn ${name}`
 }
//  console.log(sayHello2("Vinhpc"));

//Arrow function => (es6)
 var sayHello3 =(name,age) => {
    return `Bạn ${name}, Tuổi:${age}`
 }
//  console.log(sayHello3("vinh",19));

var sayHello4 = name =>`Xin chào ${name}`
// console.log(sayHello4("VINH"));

// Default parameter
var total = (a=0,b=0) =>a + b;
// console.log(total(10,20));

// Destructuring
var arr =[1,2,3,4]
var [a,b,c] = arr
// console.log(a);//1
// console.log(b);//2
// console.log(c);//3

var info = {
    name:"vinh",
    age: 19,
    child:{
        name:"vinhpc"
    }
}
var {name, age, child:{name:childname}} = info;
// console.log(name);
// console.log(age);
// console.log(childname);

const showInfo =({name,age,child:{name: childname}}) =>{
    // console.log(name);
    // console.log(age);
    // console.log(childname);
    
}

//Show (info)

// Rest ... :phần còn lại 
 var arr=[1,2,3,4,5];
 var [first,...rest]=arr;
// console.log(first);//1
// console.log(rest);//[2,3,4,5]

var info ={
    name:"vinh",
    age:19,
    child:{
        name:"vinh"
    }
}

var {name,...restObj}=info
// console.log(name);
// console.log(restObj);


var sum= (a,...rest)=>{
    // console.log(rest);
    let total=0;
    rest.forEach((item,index)=>{
        // console.log(item);
        // console.log(index);
        a += item;
    })
    return a
}
// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,6,7,8,9));


//spread ...:phân rã
var arr1=[1,2,3];
var arr2=[4,5,6];

//dùng concat
// console.log(arr1.concat(arr2));

//dùng push
var newArr=[...arr1,...arr2];
// console.log(newArr);


var obj1={
    name:"vinh",
    age:20
}
var obj2={
    name2:"vinhpc",
}
var newObj={...obj1,...obj2};
// console.log(newObj);

// Biến tham trị (string , number, boolean)
var a = 1;
var b = a;//gán giá trị của a cho b
a=2;
// console.log(b);//1


// Biến tham chiếu (array, object)
var a = {value:1};
var b = a;//gán vị trí nhớ của a cho b(a và b cùng trỏ đến 1 ô nhớ)
a.value = 2;//khi thay đổi giá trị của a thì b cũng thay đổi theo
// console.log(b.value);

//deep clone
var a = {value: 1};
var b = {...a};//1
a.value = 2;
// console.log(b.value);//1


//Nullish ??

var text="vinhpc";//undefined , null
// text = text ??'default value';
text ??= 'default'
console.log(text);


// optional chaining ?.
var obj ={
    name:"chinhpd5"
}

// console.log((obj.name)); // chinhpd5
// console.log((obj.child)); // undefined
// console.log((obj?.child?.name));




// module import export
import title, {home as homeChinhpd5,greeting} from './services.js'

// console.log(title);
// console.log(homeChinhpd5);

greeting();








 